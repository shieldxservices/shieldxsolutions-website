import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type EstimateRequest = {
  services: string[];
  propertyType: string;
  projectSize: string;
  squareFootage?: string;
  state: string;
  city: string;
  zipCode: string;
  timeline: string;
  fullName: string;
  businessName?: string;
  phone: string;
  email: string;
  contactMethod: string;
  comments?: string;

  cameraCount?: string;
  cameraEnvironment?: string;
  doorCount?: string;
  cablingDrops?: string;
  networkType?: string;
};

const serviceNames: Record<string, string> = {
  networking: "Enterprise Networking",
  wifi: "Wi-Fi Installation",
  cameras: "Security Cameras",
  "access-control": "Access Control",
  cabling: "Structured Cabling",
  "audio-video": "Audio / Video",
  "it-support": "IT Support",
  other: "Other",
};

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function displayValue(value?: string): string {
  return value?.trim() ? escapeHtml(value) : "Not provided";
}

function validateRequest(body: EstimateRequest): string | null {
  if (!Array.isArray(body.services) || body.services.length === 0) {
    return "Please select at least one service.";
  }

  const requiredFields: Array<[keyof EstimateRequest, string]> = [
    ["propertyType", "Property type"],
    ["projectSize", "Project size"],
    ["state", "State"],
    ["city", "City"],
    ["zipCode", "ZIP code"],
    ["timeline", "Timeline"],
    ["fullName", "Full name"],
    ["phone", "Phone number"],
    ["email", "Email address"],
    ["contactMethod", "Contact method"],
  ];

  for (const [field, label] of requiredFields) {
    const value = body[field];

    if (typeof value !== "string" || !value.trim()) {
      return `${label} is required.`;
    }
  }

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email);

  if (!emailIsValid) {
    return "Please enter a valid email address.";
  }

  return null;
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.ESTIMATE_FROM_EMAIL;
    const recipientEmail = process.env.ESTIMATE_TO_EMAIL;

    if (!apiKey || !fromEmail || !recipientEmail) {
      console.error("Estimate email environment variables are missing.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    const body = (await request.json()) as EstimateRequest;
    const validationError = validateRequest(body);

    if (validationError) {
      return NextResponse.json(
        {
          success: false,
          message: validationError,
        },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const selectedServices = body.services
      .map((service) => serviceNames[service] ?? service)
      .join(", ");

    const projectLocation = `${escapeHtml(body.city)}, ${escapeHtml(
      body.state
    )} ${escapeHtml(body.zipCode)}`;

    const businessEmailHtml = `
      <div style="background:#07101f;padding:36px 16px;font-family:Arial,sans-serif;color:#e5e7eb;">
        <div style="max-width:680px;margin:0 auto;background:#0d1728;border:1px solid #253551;border-radius:20px;overflow:hidden;">
          <div style="padding:28px 32px;background:linear-gradient(135deg,#0b1730,#123d83);">
            <p style="margin:0 0 8px;color:#93c5fd;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">
              Shield X Services
            </p>

            <h1 style="margin:0;color:#ffffff;font-size:28px;">
              New Estimate Request
            </h1>

            <p style="margin:10px 0 0;color:#cbd5e1;">
              A new customer submitted the website project-estimate form.
            </p>
          </div>

          <div style="padding:30px 32px;">
            <h2 style="margin:0 0 18px;color:#ffffff;font-size:19px;">
              Customer information
            </h2>

            <table style="width:100%;border-collapse:collapse;font-size:15px;">
              <tr>
                <td style="padding:10px 0;color:#94a3b8;width:190px;">Name</td>
                <td style="padding:10px 0;color:#ffffff;font-weight:600;">${escapeHtml(
                  body.fullName
                )}</td>
              </tr>

              <tr>
                <td style="padding:10px 0;color:#94a3b8;">Business</td>
                <td style="padding:10px 0;color:#ffffff;">${displayValue(
                  body.businessName
                )}</td>
              </tr>

              <tr>
                <td style="padding:10px 0;color:#94a3b8;">Phone</td>
                <td style="padding:10px 0;color:#ffffff;">${escapeHtml(
                  body.phone
                )}</td>
              </tr>

              <tr>
                <td style="padding:10px 0;color:#94a3b8;">Email</td>
                <td style="padding:10px 0;color:#ffffff;">${escapeHtml(
                  body.email
                )}</td>
              </tr>

              <tr>
                <td style="padding:10px 0;color:#94a3b8;">Preferred contact</td>
                <td style="padding:10px 0;color:#ffffff;">${escapeHtml(
                  body.contactMethod
                )}</td>
              </tr>
            </table>

            <div style="height:1px;background:#26354e;margin:26px 0;"></div>

            <h2 style="margin:0 0 18px;color:#ffffff;font-size:19px;">
              Project details
            </h2>

            <table style="width:100%;border-collapse:collapse;font-size:15px;">
              <tr>
                <td style="padding:10px 0;color:#94a3b8;width:190px;">Services</td>
                <td style="padding:10px 0;color:#ffffff;font-weight:600;">${escapeHtml(
                  selectedServices
                )}</td>
              </tr>

              <tr>
                <td style="padding:10px 0;color:#94a3b8;">Property type</td>
                <td style="padding:10px 0;color:#ffffff;">${escapeHtml(
                  body.propertyType
                )}</td>
              </tr>

              <tr>
                <td style="padding:10px 0;color:#94a3b8;">Project size</td>
                <td style="padding:10px 0;color:#ffffff;">${escapeHtml(
                  body.projectSize
                )}</td>
              </tr>

              <tr>
                <td style="padding:10px 0;color:#94a3b8;">Square footage</td>
                <td style="padding:10px 0;color:#ffffff;">${displayValue(
                  body.squareFootage
                )}</td>
              </tr>

              <tr>
                <td style="padding:10px 0;color:#94a3b8;">Location</td>
                <td style="padding:10px 0;color:#ffffff;">${projectLocation}</td>
              </tr>

              <tr>
                <td style="padding:10px 0;color:#94a3b8;">Timeline</td>
                <td style="padding:10px 0;color:#ffffff;">${escapeHtml(
                  body.timeline
                )}</td>
              </tr>
            </table>

            <div style="height:1px;background:#26354e;margin:26px 0;"></div>

            <h2 style="margin:0 0 18px;color:#ffffff;font-size:19px;">
              Service-specific information
            </h2>

            <table style="width:100%;border-collapse:collapse;font-size:15px;">
              <tr>
                <td style="padding:10px 0;color:#94a3b8;width:190px;">Camera quantity</td>
                <td style="padding:10px 0;color:#ffffff;">${displayValue(
                  body.cameraCount
                )}</td>
              </tr>

              <tr>
                <td style="padding:10px 0;color:#94a3b8;">Camera environment</td>
                <td style="padding:10px 0;color:#ffffff;">${displayValue(
                  body.cameraEnvironment
                )}</td>
              </tr>

              <tr>
                <td style="padding:10px 0;color:#94a3b8;">Access-control doors</td>
                <td style="padding:10px 0;color:#ffffff;">${displayValue(
                  body.doorCount
                )}</td>
              </tr>

              <tr>
                <td style="padding:10px 0;color:#94a3b8;">Cable drops</td>
                <td style="padding:10px 0;color:#ffffff;">${displayValue(
                  body.cablingDrops
                )}</td>
              </tr>

              <tr>
                <td style="padding:10px 0;color:#94a3b8;">Network requirement</td>
                <td style="padding:10px 0;color:#ffffff;">${displayValue(
                  body.networkType
                )}</td>
              </tr>
            </table>

            <div style="margin-top:26px;padding:18px;background:#08111f;border:1px solid #26354e;border-radius:14px;">
              <p style="margin:0 0 8px;color:#94a3b8;font-size:13px;font-weight:700;text-transform:uppercase;">
                Additional details
              </p>

              <p style="margin:0;color:#e5e7eb;line-height:1.6;white-space:pre-wrap;">${displayValue(
                body.comments
              )}</p>
            </div>
          </div>
        </div>
      </div>
    `;

    const customerEmailHtml = `
      <div style="background:#07101f;padding:36px 16px;font-family:Arial,sans-serif;color:#e5e7eb;">
        <div style="max-width:620px;margin:0 auto;background:#0d1728;border:1px solid #253551;border-radius:20px;overflow:hidden;">
          <div style="padding:28px 32px;background:linear-gradient(135deg,#0b1730,#123d83);">
            <p style="margin:0 0 8px;color:#93c5fd;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">
              Shield X Services
            </p>

            <h1 style="margin:0;color:#ffffff;font-size:28px;">
              We received your request
            </h1>
          </div>

          <div style="padding:30px 32px;">
            <p style="margin:0;color:#e5e7eb;font-size:17px;">
              Hello ${escapeHtml(body.fullName)},
            </p>

            <p style="margin:18px 0 0;color:#cbd5e1;line-height:1.7;">
              Thank you for contacting Shield X Services. Our team received
              your project information and will review your requirements.
            </p>

            <div style="margin:24px 0;padding:18px;background:#08111f;border:1px solid #26354e;border-radius:14px;">
              <p style="margin:0 0 8px;color:#94a3b8;font-size:13px;">
                Requested services
              </p>

              <p style="margin:0;color:#ffffff;font-weight:700;">
                ${escapeHtml(selectedServices)}
              </p>

              <p style="margin:16px 0 8px;color:#94a3b8;font-size:13px;">
                Project location
              </p>

              <p style="margin:0;color:#ffffff;">
                ${projectLocation}
              </p>
            </div>

            <p style="margin:0;color:#cbd5e1;line-height:1.7;">
              A Shield X specialist will contact you using your preferred
              method: <strong style="color:#ffffff;">${escapeHtml(
                body.contactMethod
              )}</strong>.
            </p>

            <p style="margin:24px 0 0;color:#cbd5e1;">
              Shield X Services
            </p>
          </div>
        </div>
      </div>
    `;

    const businessResult = await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      replyTo: body.email,
      subject: `New estimate request — ${body.fullName} — ${body.city}, ${body.state}`,
      html: businessEmailHtml,
    });

    if (businessResult.error) {
      console.error("Business estimate email failed:", businessResult.error);

      return NextResponse.json(
        {
          success: false,
          message: "We could not submit your request. Please try again.",
        },
        { status: 500 }
      );
    }

    // Confirmation email is useful, but a failure should not lose the lead.
    const confirmationResult = await resend.emails.send({
      from: fromEmail,
      to: body.email,
      subject: "Shield X received your estimate request",
      html: customerEmailHtml,
    });

    if (confirmationResult.error) {
      console.error(
        "Customer confirmation email failed:",
        confirmationResult.error
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your estimate request was submitted successfully.",
    });
  } catch (error) {
    console.error("Estimate submission error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please try again.",
      },
      { status: 500 }
    );
  }
}
/** @format */

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { companyName, name, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    /** -------------------------------------------
     *  Email #1 → Send to Company (Admin)
     * ------------------------------------------- */
    const adminMail = {
      from: `"ハイウェイメンテック株式会社" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: `【ハイウェイメンテック株式会社】お問い合わせを受け付けました。`,
      html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #333;">

      ハイウェイメンテック株式会社<br><br>
      システムより、ウェブサイト
      (<a href="https://www.hyway-mentec.com/" target="_blank">https://www.hyway-mentec.com/</a>)
      へ新規のお問い合わせがありました。<br>
      内容のご確認をお願いいたします。
      </p>

      <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;" />

      <p><strong>--お問い合わせ概要--</strong></p>

      <p>
        <strong>お問い合わせ項目：</strong> お問い合わせ<br>
        <strong>会社名：</strong> ${companyName}<br>
        <strong>お名前：</strong> ${name}<br>
        <strong>メールアドレス：</strong> ${email}<br>
        <strong>電話番号：</strong> ${phone || 'なし'}<br>
        <strong>お問い合わせ内容：</strong><br>
        ${message}
      </p>

      <br>

      <p style="color: #888; font-size: 14px;">
        ※本メールはサーバー
        (<a href="https://www.hyway-mentec.com" target="_blank">https://www.hyway-mentec.com</a>)
        からの自動返信メールとなっております。<br>
        本メールに返信いただいてもご連絡いたしかねますのでご了承ください。
      </p>

      <br>

      <p>
        ────<br>
        ハイウェイメンテック株式会社<br>
        〒454-0826 名古屋市中川区小本本町一丁目70番地<br>
        TEL: 052-364-7280 / FAX: 052-364-7281<br>
        Email: info@hyway-mentec.com<br>
        URL: <a href="https://www.hyway-mentec.com/" target="_blank">https://www.hyway-mentec.com/</a>
      </p>
    </div>
`,
    };

    await transporter.sendMail(adminMail);

    /** -------------------------------------------
     *  Email #2 → Auto-confirmation to Visitor
     * ------------------------------------------- */
    const userMail = {
      from: `"${process.env.WEBSITE_NAME || 'ハイウェイメンテック株式会社'}" <${
        process.env.SMTP_USER
      }>`,
      to: email, // Send to visitor
      subject: `【ハイウェイメンテック株式会社】お問い合わせありがとうございました。`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #333;">
          
          ${companyName}<br>
          ${name} 様</p>

          <p>
            平素は格別のご高配を賜り、誠にありがとうございます。<br>
            ハイウェイメンテック株式会社でございます。
          </p>

          <p>
            この度は、弊社へお問い合わせいただき、心より感謝申し上げます。<br>
            お客様がご入力されたお問い合わせ内容を控えとして、以下の通り自動返信いたします。
          </p>

          <p>
            内容を確認の上、改めて担当者よりご連絡いたしますので、恐れ入りますが<br>
            今しばらくお待ちいただけますようお願い申し上げます。
          </p>

          <hr style="border: none; border-top: 1px solid #ccc; margin: 24px 0;" />

          <p><strong>--お問い合わせ内容控え--</strong></p>

          <p>
            <strong>お問い合わせ項目：</strong> お問い合わせ<br>
            <strong>貴社名：</strong> ${companyName}<br>
            <strong>お名前：</strong> ${name}<br>
            <strong>メールアドレス：</strong> ${email}<br>
            <strong>電話番号：</strong> ${phone || 'なし'}<br>
            <strong>お問い合わせ内容：</strong><br>
            ${message}
          </p>

          <br>

          <p style="color: #888; font-size: 14px;">
            ※本メールはサーバー
            (<a href="https://www.hyway-mentec.com/" target="_blank">https://www.hyway-mentec.com/</a>)
            からの自動返信メールとなっております。<br>
            本メールに返信いただいてもご連絡いたしかねますのでご了承ください。
          </p>

          <br>

          <p>
            ────────────────────────<br>
            ハイウェイメンテック株式会社<br><br>

            〒454-0826 名古屋市中川区小本本町一丁目70番地<br>
            TEL: 052-364-7280 / FAX: 052-364-7281<br>
            Email: info@hyway-mentec.com<br>
            （※運用時に使用するメールアドレスは変更の可能性があります）<br>
            URL: <a href="https://www.hyway-mentec.com" target="_blank">https://www.hyway-mentec.com</a><br>
            ────────────────────────
          </p>
        </div>
      `,
    };

    await transporter.sendMail(userMail);

    return NextResponse.json({
      success: true,
      message: 'Both emails sent successfully!',
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email.' },
      { status: 500 }
    );
  }
}

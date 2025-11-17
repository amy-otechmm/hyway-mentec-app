/** @format */

'use client';

import React, { useState } from 'react';
import styles from './contact.module.scss';
import { IconArrowRight } from '../icons/icons';

const ContactForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    prefecture: '',
    message: '',
    agreed: false,
  });

  // Handler for input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    // Special handling for checkbox
    const isCheckbox = type === 'checkbox';
    const checkedValue = (e.target as HTMLInputElement).checked;

    setFormData((prevState) => ({
      ...prevState,
      [name]: isCheckbox ? checkedValue : value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // **IMPORTANT**: In a real application, you would send this data to your server
    // or a third-party service (like Resend, Nodemailer, etc.) here.
    alert('Thank you for your message!');
    // Optionally, reset the form
    setFormData({
      name: '',
      email: '',
      city: '',
      prefecture: '',
      message: '',
      agreed: false,
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Contact</h1>
          <div className={styles.verticalText}>
            <p className={styles.verEng}>CONTACT</p>
            <div className={styles.verLine}></div>
            <span className={styles.verJP}>お問い合わせ</span>
          </div>
        </header>

        <p className={styles.intro}>
          ご不明な点、お悩みなどお気軽にご相談ください。
          <br />
          【重要】当社へのご意見、お問い合わせ等につきましてはメールまたは電話・FAXにてご連絡いただきますようお願いいたします。
        </p>

        <p className={styles.requiredNote}>
          <span className={styles.requiredMark}>※</span> は必須項目となります。
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Name */}
          <div className={styles.formGroup}>
            <label htmlFor='name' className={styles.label}>
              お名前<span className={styles.requiredMark}>※</span>
            </label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='例：山田太郎'
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>

          {/* Email */}
          <div className={styles.formGroup}>
            <label htmlFor='email' className={styles.label}>
              メールアドレス<span className={styles.requiredMark}>※</span>
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='例：abcd@sample.jp'
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>

          {/* City */}
          <div className={styles.formGroup}>
            <label htmlFor='city' className={styles.label}>
              市区町村
            </label>
            <input
              type='text'
              id='city'
              name='city'
              placeholder='例：大分市'
              value={formData.city}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          {/* Prefecture */}
          <div className={styles.formGroup}>
            <label htmlFor='prefecture' className={styles.label}>
              都道府県
            </label>
            <input
              type='text'
              id='prefecture'
              name='prefecture'
              placeholder='例：大分県'
              value={formData.prefecture}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          {/* Message */}
          <div className={styles.formGroup}>
            <label htmlFor='message' className={styles.label}>
              質問・ご要望<span className={styles.requiredMark}>※</span>
            </label>
            <textarea
              id='message'
              name='message'
              placeholder='ご質問・ご要望をご入力ください。'
              value={formData.message}
              onChange={handleChange}
              required
              className={styles.textarea}></textarea>
          </div>

          {/* Privacy Policy Agreement */}
          <div className={styles.checkboxWrapper}>
            <input
              type='checkbox'
              id='agreed'
              name='agreed'
              checked={formData.agreed}
              onChange={handleChange}
              required
            />
            <label htmlFor='agreed'>
              送信前に、当社の
              <a href='/privacy-policy' target='_blank'>
                プライバシーポリシー
              </a>
              をご確認ください。
            </label>
          </div>

          {/* Submit Button */}
          <div className={styles.submitButtonWrapper}>
            <button type='submit' className={styles.submitButton}>
              <span>提出する</span> <IconArrowRight className={styles.arrow} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

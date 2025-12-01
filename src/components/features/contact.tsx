/** @format */

'use client';

import React, { useState } from 'react';
import styles from './contact.module.scss';
import { IconArrowRight, IconMailSuccess } from '../icons/icons';

const ContactForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    agreed: false,
  });

  const [loading, setLoading] = useState(false); // Loading state
  const [success, setSuccess] = useState(false); // Success state
  const [error, setError] = useState(''); // Error message

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setFormData({
          companyName: '',
          name: '',
          email: '',
          phone: '',
          message: '',
          agreed: false,
        });
      } else {
        setError('Failed to send your message. Please try again later.');
      }
    } catch (err) {
      console.error(err);
      setError('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {!success ? (
          <>
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
              <span className={styles.requiredMark}>※</span>{' '}
              は必須項目となります。
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
              {/* Company Name */}
              <div className={styles.formGroup}>
                <label htmlFor="companyName" className={styles.label}>
                  会社名<span className={styles.requiredMark}>※</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  placeholder="例：山田太郎"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>

              {/* Name */}
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  お名前<span className={styles.requiredMark}>※</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="例：山田太郎"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>

              {/* Email */}
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  メールアドレス<span className={styles.requiredMark}>※</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="例：abcd@sample.jp"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>

              {/* phone */}
              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  電話番号
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="例：000-367-7280"
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>

              {/* Message */}
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  質問・ご要望<span className={styles.requiredMark}>※</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="ご質問・ご要望をご入力ください。"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={styles.textarea}
                ></textarea>
              </div>

              {/* Privacy Policy Agreement */}
              <div className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  id="agreed"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="agreed">
                  送信前に、当社の
                  <a href="/privacy-policy" target="_blank">
                    プライバシーポリシー
                  </a>
                  をご確認ください。
                </label>
              </div>

              {/* Submit Button */}
              <div className={styles.submitButtonWrapper}>
                <button type="submit" className={styles.submitButton}>
                  <span>{loading ? '送信中...' : '送信する'} </span>
                  <IconArrowRight className={styles.arrow} />
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className={styles.successMessage}>
            <IconMailSuccess />
            <h2>送信が完了しました</h2>
            <p>お問い合わせ内容を受け付けました。メールを確認してください。</p>

            <button
              className={styles.goBackButton}
              onClick={() => setSuccess(false)} // Go back to the form
            >
              戻る
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;

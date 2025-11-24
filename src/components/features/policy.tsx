/** @format */

'use client';

import styles from './policy.module.scss';
import { useEffect, useState } from 'react';

export default function PrivacyPolicy() {
  // cursor
  const [cursorVariant, setCursorVariant] = useState<
    'default' | 'imageBg' | 'hidden'
  >('default');

  useEffect(() => {
    const interactiveElements = document.querySelectorAll(
      'a, button, input,textarea, [role="button"], [role="link"]'
    );

    const handleLinkEnter = () => {
      setCursorVariant('hidden');
    };

    const handleLinkLeave = () => {
      setCursorVariant('default');
    };

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleLinkEnter);
      el.addEventListener('mouseleave', handleLinkLeave);
    });

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleLinkEnter);
        el.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);
  // scroll up
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <section className={styles.privacyContainer}>
        <small id='top'>(PRIVACY POLICY)</small>
        <p className={styles.mainTitle}>プライバシーポリシー</p>
        <div className={styles.privacyContent}>
          {/* <small>(PRIVACY POLICY)</small> */}
          <p className={styles.intro}>
            ハイウェイメンテック株式会社(以下「当社」といいます)は、以下の方針に基づき、個人を識別しうる情報（以下「個人情報」といい
            ます）を取り扱わせていただきます。
          </p>
          <div className={styles.policy}>
            <div className={styles.header}>
              <h4>1.法令等の遵守</h4>
            </div>
            <p className={styles.content}>
              当社は、「個人情報の保護に関する法律」、その他個人情報の取扱いについて定められた適用ある法令、関係省庁のガイ
              ドライン、社内規程等を遵守いたします。
            </p>
          </div>
          <div className={styles.policy}>
            <div className={styles.header}>
              <h4>2.個人情報の取得・利用</h4>
            </div>
            <div className={styles.content}>
              <p>
                当社は、業務を遂行する上で、お客様の氏名、住所、電話番号等の個人情報を取得させていただいております。当社は、
                個人情報を以下の目的のために利用します。
              </p>
              <ul>
                <li>(1) お問い合せなどへの返答</li>
                <li>(2) サービス内容の宣伝・告知</li>
                <li>(3) 顧客管理</li>
              </ul>
              <p>
                当社はお客様から直接書面等により個人情報を取得する場合、その利用目的を明示するものとし、それ以外の場合につい
                ても、その利用目的を通知または公表いたします。当社は、お客様の事前の同意がある場合、または、法令により許され
                る場合でない限り、上記の利用目的の達成に必要な範囲を超えて、個人情報を利用いたしません。
              </p>
            </div>
          </div>
          <div className={styles.policy}>
            <div className={styles.header}>
              <h4>3.個人情報の管理</h4>
            </div>
            <p>
              当社は、個人情報の漏えい、滅失、き損または不正アクセス等を防止するために、必要な措置を講じ、個人情報を適切に
              管理いたします。また、当社は、個人情報の取扱いに関して、従業者に対して適切な監督を行うとともに、個人情報の取
              扱いを委託する際には、委託先に対しても個人情報を適切に管理するよう監督いたします。
            </p>
          </div>
          <div className={styles.policy}>
            <div className={styles.header}>
              <h4>4.個人情報の第三者への提供</h4>
            </div>
            <p>
              当社は、お客様の事前の同意がある場合、または、法令に基づく場合、利用目的の達成に必要な範囲内で個人情報を委託
              する場合等、法令により許される場合でない限り、個人情報を第三者に提供いたしません。
            </p>
          </div>
          <div className={styles.policy}>
            <div className={styles.header}>
              <h4>5.個人情報の開示、訂正、利用停止等</h4>
            </div>
            <p>
              お客様がご自分の個人情報の開示、訂正、利用停止、利用目的の通知等を希望される場合、当社までご連絡くださるよう
              お願いいたします。お客様から開示等の求めを受けた場合、当社は、お客様ご本人からの求めであることを確認させてい
              ただいた上で、法令に定めるところに従って、これに応じるものといたします。
            </p>
          </div>
          <div className={styles.policy}>
            <div className={styles.header}>
              <h4>6.体制の整備</h4>
            </div>
            <p>
              当社は、個人情報の取扱いについて定められた法令、関係省庁のガイドライン、社内規程等を遵守するため、全従業員を
              対象に教育を実施いたします。また、当社は、個人情報の取扱いに関する責任者を設置し、定期的な監査を実施いたします。
            </p>
          </div>
          <div className={styles.policy}>
            <div className={styles.header}>
              <h4>7.お問合せ先</h4>
            </div>
            <p>
              本ポリシーの内容、その他当社の個人情報の取扱いにつきまして、ご意見、ご質問等がございましたら、当社までご連絡
              くださいますようお願い申し上げます。
              当社は、お客様から当社の個人情報の取扱いについてご苦情の申出を受けた場合、
              迅速かつ適切に対応するものといたします。
            </p>
          </div>
          <div className={styles.policy}>
            <div className={styles.header}>
              <h4>8.その他</h4>
            </div>
            <p>
              当社は、お客様のご意見等も踏まえ、また法令の変更等に伴い、本ポリシーを必要に応じて見直し、その改善に努めます。
              本方針を改定した場合、当社ホームページに掲載することにより公表いたしますので、定期的にご確認いただきますよう
              お願い申し上げます。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

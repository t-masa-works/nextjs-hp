import React from "react";
import Image from "next/image";

const Policy = () => {
  return (
    <div className="p-5">
      <div className="sm:flex-col justify-center mt-5 gap-8">
        <h2 className="font-bold text-2xl">Cat_Escape　プライバシーポリシー</h2>
        <p className="mt-2 mb-2">制定日　2025/2/22</p>
        <div className="text-left p-5">
          <p className="p-5">
            このページは、T.Masa.Works(以下「私」と言います。)が提供するスマートフォンアプリ「Cat_Escape」(以下「本アプリ」と言います。)における利用者情報の取扱いについて、以下のとおりアプリケーション・プライバシーポリシー（以下「本ポリシー」といいます。）を定め、公表しております。本アプリをインストールする前に本ポリシーをご確認いただき、内容をご理解の上で本アプリをご利用下さい。
            なお、本ポリシーにおいて、「利用者情報」とは、お客様の識別に係る情報、通信サービス上の行動履歴、その他お客様のスマートフォンにおいてお客様と結びついた形で生成、利用又は蓄積されている情報であって、本ポリシーに基づき当社が取得するものを意味するものとします。
          </p>
        </div>
        <div className="p-5">
          <h3 className="font-bold mt-2 mb-2 text-xl">本アプリが利用する利用者情報</h3>
          <p className="mb-2">
            本アプリが利用する利用者情報は、下記の３つです。
          </p>
          <ul className="list-decimal text-left ml-20">
            <li>
              アプリの広告表示のためにお客様の情報の一部を送信する可能性があります。
            </li>
            <li>
              アプリではアクセス解析ツールを用いてアプリの利用状況を収集しております。
            </li>
            <li>問い合わせの際に利用者情報の一部を送信します。</li>
          </ul>
          <p className="p-5 text-left">
            1.
            アプリの広告表示本アプリは広告表示のためにお客様の情報の一部を送信する可能性があります。広告表示は、下記２社のサービスを利用しており、本アプリは２社に利用者情報の提供を行います。それぞれのサービスが利用している利用者情報と目的については各社のサービスのプライバシーポリシーをご確認ください。
            <br />
            <a
              className="mr-5 ml-2 text-blue-400"
              href="https://policies.google.com/technologies/partner-sites"
            >
              Admobプライバシーポリシー
            </a>
          </p>
          <p className="p-5 text-left">
            2.
            本アプリではアクセス解析ツールを用いてアプリの利用状況を収集しております。
            <br />
            アクセス解析はGoogle Analyticsを利用しております。
            <br />
            本アプリは画面遷移を行った際に、画面IDと利用者情報をGoogle
            Analytics社に送付します。
            <br></br>
            <a
              className="mr-5 ml-2 text-blue-400"
              href="https://policies.google.com/?hl=ja"
            >
              Google Analytics　プライバシーポリシー
            </a>
          </p>
          <p className="p-5 text-left">
            3. 本アプリでは問い合わせの際に利用者情報の一部を送信します。
            問い合わせはメールで行い、メール本文に下記情報が埋め込まれます。また、メールで送信されるため、メールアドレスも送信されます
          </p>
          <ul className="list-disc text-left ml-20">
            <li>名前、メールアドレス</li>
            <li>
              端末名、OSバージョン、その他端末情報(画面サイズ、ピクセル密度、利用可能ヒープメモリ量)
            </li>
            <li>アドオン購入状況</li>
          </ul>
          <h3 className="font-bold mt-2 mb-2 text-xl">利用目的</h3>
          <p className="mb-2">利用者情報はそれぞれ下記目的に利用されます。</p>
          <ul className="list-disc text-left ml-20">
            <li>第三者の広告の配信・表示のため</li>
            <li>
            当社のサービスに関連して、個人を識別できない形式に加工した統計データを作成するため
            </li>
            <li>本アプリに関するご案内、お問い合せ等への対応のため</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      topImage: "/cat.jpg",
      topText: "Policy",
    },
  };
}

export default Policy;

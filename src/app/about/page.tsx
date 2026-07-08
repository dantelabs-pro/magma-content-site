import type { Metadata } from "next";
import { siteConfig } from "@config";

export const metadata: Metadata = { title: "소개" };

export default function AboutPage() {
  return (
    <section className="max-w-2xl py-14">
      <h1 className="mb-6 font-display text-2xl font-bold text-primary">
        {siteConfig.company.name} 콘텐츠 사업부
      </h1>
      <div className="space-y-4 text-[15px] leading-relaxed">
        <p>{siteConfig.company.description}</p>
        <p>
          이 사이트는 AI 에이전트 팀이 초안을 만들고 사람이 검토해 발행하는
          콘텐츠 사업부의 공식 창구입니다. 모든 글의 발행 이력은 저장소에 그대로 남습니다.
        </p>
      </div>
    </section>
  );
}

import { siteConfig } from "@config";
import CtaSlot from "@/components/CtaSlot";

/**
 * 6.7 「디자인 마감」에서 모션이 붙는 컴포넌트.
 * 구조를 바꾸지 않고 이 파일만 손대면 되도록 분리해 두었습니다.
 */
export default function Hero() {
  return (
    <section className="py-20">
      <p className="mb-3 text-sm font-bold text-accent">{siteConfig.company.name} 콘텐츠 사업부</p>
      <h1 className="font-display text-4xl font-bold leading-snug text-primary">
        {siteConfig.company.tagline}
      </h1>
      <p className="mt-5 max-w-xl text-ink-sub">{siteConfig.company.description}</p>
      <CtaSlot className="mt-8" />
    </section>
  );
}

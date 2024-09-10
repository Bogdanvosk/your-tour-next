import { content } from '@/content';

import SectionHead from '@/components/common/SectionHead/SectionHead';
import TravelItems from '@/components/common/TravelItems/TravelItems';

const Travel = () => {
  return (
    <section>
      <SectionHead
        title={content.travel.title}
        subtitle={content.travel.subtitle}
      />
      <TravelItems items={content.travel.items} />
    </section>
  );
};

export default Travel;

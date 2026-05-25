const T7_APPS = [
  {
    id: 'shuchu-no-ki',
    no: '01',
    name: { ja: '集中の木', en: 'Focus Tree' },
    tagline: {
      ja: '集中するたびに、木が育つ。',
      en: 'A tree grows every time you focus.',
    },
    description: {
      ja: '集中するたびに木が育つフォーカスタイマーアプリ。タイマーをスタートするだけで、画面の中で木が少しずつ成長。アプリを離れると木が枯れてしまうため、スマホを触りたくなる気持ちを抑制します。集中した記録はカレンダーで振り返ることができます。',
      en: 'A focus timer where a tree grows as you concentrate. Leave the app and the tree dies — a gentle nudge to stay on task. Your sessions are tracked in a full calendar so you can look back on every streak.',
    },
    category: { ja: '生産性', en: 'Productivity' },
    status: { ja: '公開中', en: 'Live' },
    statusKey: 'live',
    year: '2026',
    stack: ['Flutter', 'Dart', 'Riverpod'],
    platforms: ['Android'],
    url: 'https://play.google.com/store/apps/details?id=com.tani7labo.ontree',
  },
  {
    id: 'rise',
    no: '02',
    name: { ja: 'Rise', en: 'Rise' },
    tagline: {
      ja: '毎日の積み重ねを、かたちにする。',
      en: 'Turn daily effort into visible growth.',
    },
    description: {
      ja: 'シンプルで使いやすい習慣管理アプリ。毎日の積み重ねを記録して、成長を可視化します。継続することの手応えを、静かに感じられる道具です。',
      en: 'A clean habit tracker that records your daily effort and visualises your growth over time. A quiet tool for feeling the weight of consistency.',
    },
    category: { ja: '生産性', en: 'Productivity' },
    status: { ja: '公開中', en: 'Live' },
    statusKey: 'live',
    year: '2025',
    stack: ['Flutter', 'Dart'],
    platforms: ['Android'],
    url: 'https://play.google.com/store/apps/details?id=com.tani7labo.rise',
  },
];

const T7_NAV = {
  ja: { works: '作品', about: '関于', contact: '連絡', toggle: 'EN' },
  en: { works: 'Works', about: 'About', contact: 'Contact', toggle: 'JA' },
};

const T7_BIO = {
  ja: {
    name: 'Tani7Labo',
    handle: '@tani7labo',
    role: '個人エンジニア / ものづくり研究室',
    bio: '日々の暮らしに、少しだけ静かな手応えを足す道具を作っています。',
    intro_line1: 'ひとりで作る、',
    intro_line2: '小さな道具たち。',
    long_tagline: '一人称のソフトウェアを、ひとつずつ、丁寧に。',
    works_heading: '作品一覧',
    works_sub: '現在公開中のプロジェクト',
    all: 'すべて',
    cta_open: '詳しく見る',
    cta_visit: 'Google Play で見る',
    cta_close: '閉じる',
    stack: '技術',
    platform: '対応',
    release: 'リリース',
    status: 'ステータス',
    footer_signature: '— つくる、ためす、また、つくる。',
  },
  en: {
    name: 'Tani7Labo',
    handle: '@tani7labo',
    role: 'Solo engineer · craft studio',
    bio: 'Making small tools that add a little quiet weight to everyday life. Design to release, alone.',
    intro_line1: 'Small tools,',
    intro_line2: 'built alone.',
    long_tagline: 'Software in the first-person, made one piece at a time.',
    works_heading: 'Works',
    works_sub: 'Currently shipping',
    all: 'All',
    cta_open: 'Read more',
    cta_visit: 'View on Google Play',
    cta_close: 'Close',
    stack: 'Stack',
    platform: 'Platforms',
    release: 'Released',
    status: 'Status',
    footer_signature: '— make, try, make again.',
  },
};

Object.assign(window, { T7_APPS, T7_NAV, T7_BIO });

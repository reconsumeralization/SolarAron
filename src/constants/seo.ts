export const SEO_CONTENT = {
  home: {
    title: 'Professional Solar Panel Maintenance',
    description: 'Expert solar panel maintenance and cleaning services in Florida. Maximize your solar investment with A-Aaron\'s Florida Solar.',
    keywords: ['solar maintenance', 'solar panel cleaning', 'Florida solar', 'solar panel efficiency']
  },
  services: {
    title: 'Solar Maintenance Services',
    description: 'Comprehensive solar maintenance services including cleaning, inspection, and monitoring. Keep your solar panels operating at peak efficiency.',
    keywords: ['solar services', 'panel cleaning', 'system inspection', 'performance monitoring']
  },
  stories: {
    title: 'Customer Success Stories',
    description: 'Read how Florida homeowners and businesses are maximizing their solar investment with our maintenance services.',
    keywords: ['solar testimonials', 'customer reviews', 'solar maintenance results']
  },
  packages: {
    title: 'Solar Maintenance Packages',
    description: 'Choose from our range of solar maintenance packages designed to keep your solar system performing at its best.',
    keywords: ['solar packages', 'maintenance plans', 'solar care', 'panel cleaning plans']
  },
  roiCalculator: {
    title: 'Solar Maintenance ROI Calculator',
    description: 'Calculate your potential savings from proper solar maintenance. See how much you could save with professional solar panel care.',
    keywords: ['solar ROI', 'maintenance savings', 'solar efficiency', 'solar calculator']
  },
  systemHealth: {
    title: 'Solar System Health Check',
    description: 'Free solar system health assessment. Get personalized maintenance recommendations for your solar installation.',
    keywords: ['solar health check', 'system diagnosis', 'maintenance assessment', 'solar efficiency test']
  }
} as const;

interface ServiceSEO {
  title: string;
  description: string;
  keywords: string[];
}

export const SERVICE_SEO: Record<string, ServiceSEO> = {
  'system-inspection': {
    title: 'Advanced Solar System Inspection Services | A-Aaron\'s Solar',
    description: 'Professional solar system inspection including thermal imaging, diagnostic testing, and performance analysis. Get expert recommendations for your solar system.',
    keywords: ['solar inspection', 'thermal imaging', 'system diagnostics', 'performance testing']
  },
  'bird-prevention': {
    title: 'Solar Panel Bird & Debris Protection | A-Aaron\'s Solar',
    description: 'Professional bird and debris prevention solutions for solar panels. Protect your investment with our expert installation services.',
    keywords: ['bird protection', 'solar panel protection', 'debris prevention', 'system protection']
  },
  'pool-solar': {
    title: 'Pool Solar System Maintenance | A-Aaron\'s Solar',
    description: 'Complete pool solar system maintenance including system flush, leak repairs, and optimization. Keep your pool warm year-round.',
    keywords: ['pool solar', 'solar pool heating', 'pool maintenance', 'solar repair']
  },
  'hot-water': {
    title: 'Solar Hot Water System Service | A-Aaron\'s Solar',
    description: 'Expert solar hot water system maintenance and repair. Ensure reliable hot water with our professional service.',
    keywords: ['solar hot water', 'water heating', 'system maintenance', 'tank service']
  },
  'panel-installation': {
    title: 'Professional Solar Panel Installation | A-Aaron\'s Solar',
    description: 'Expert solar panel installation services with quality mounting hardware and warranty protection. Get your system installed right.',
    keywords: ['solar installation', 'panel mounting', 'professional install', 'solar setup']
  }
} as const;

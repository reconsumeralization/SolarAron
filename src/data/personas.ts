export interface CustomerPersona {
  id: string;
  name: string;
  age: number;
  occupation: string;
  location: string;
  background: string;
  story: string;
  package: string;
  testimonial: string;
}

export const customerPersonas: CustomerPersona[] = [
  {
    id: 'retired-engineer',
    name: 'David Chen',
    age: 68,
    occupation: 'Retired Aerospace Engineer',
    location: 'Viera, FL',
    background: 'Former NASA engineer who values efficiency and ROI',
    story: 'After installing solar panels through Florida Solar East in 2019, David noticed a gradual decrease in efficiency. Switching to A-Aaron\'s Premium Care package helped restore optimal performance, saving him $890 annually.',
    package: 'Premium Care',
    testimonial: 'As an engineer, I appreciate A-Aaron\'s systematic approach to maintenance. Their detailed reports and proactive solutions have kept my system running at peak efficiency.'
  },
  {
    id: 'eco-mom',
    name: 'Maria Rodriguez',
    age: 42,
    occupation: 'Environmental Consultant',
    location: 'Rockledge, FL',
    background: 'Environmentally conscious mother of three',
    story: 'Maria\'s solar investment was at risk due to Florida\'s harsh weather conditions. Regular maintenance from A-Aaron\'s prevented costly repairs and keeps her system running at peak efficiency.',
    package: 'Ultimate Care',
    testimonial: 'The peace of mind knowing my system is properly maintained is invaluable. A-Aaron\'s team is always professional and thorough.'
  },
  {
    id: 'business-owner',
    name: 'James Williams',
    age: 55,
    occupation: 'Restaurant Owner',
    location: 'Viera, FL',
    background: 'Local business owner focused on reducing operational costs',
    story: 'After neglecting maintenance, James faced unexpected repair costs. Switching to A-Aaron\'s Business Monthly plan helped stabilize his energy costs and prevent future issues.',
    package: 'Business Monthly',
    testimonial: 'The ROI on A-Aaron\'s maintenance plan has been exceptional. My restaurant\'s energy costs are more predictable now.'
  },
  {
    id: 'retired-teacher',
    name: 'Sarah Johnson',
    age: 71,
    occupation: 'Retired School Teacher',
    location: 'Rockledge, FL',
    background: 'Switched to solar for retirement savings',
    story: 'Previously with Florida Solar East, Sarah was concerned about maintaining her investment. A-Aaron\'s Basic Care package provided affordable, reliable maintenance that helped her maintain consistent energy savings.',
    package: 'Basic Care',
    testimonial: 'Their team is so patient in explaining everything. I feel confident knowing my solar investment is protected.'
  },
  {
    id: 'young-professional',
    name: 'Miguel Torres',
    age: 34,
    occupation: 'Software Developer',
    location: 'Viera, FL',
    background: 'Tech-savvy homeowner interested in smart home integration',
    story: 'After his Florida Solar East installation, Miguel wanted to optimize his system\'s performance. A-Aaron\'s Premium Care package with performance monitoring helped him achieve maximum efficiency.',
    package: 'Premium Care',
    testimonial: 'The real-time monitoring and detailed performance analytics have helped me optimize my energy usage.'
  }
];
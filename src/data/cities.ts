import { IMAGES } from '@/constants/images';

interface CityImage {
  src: string;
  alt: string;
  geoMetadata: {
    latitude: number;
    longitude: number;
    city: string;
    state: string;
  };
}

interface Landmark {
  name: string;
  image: string;
  description: string;
}

interface CityData {
  name: string;
  state: string;
  lat: number;
  lng: number;
  description: string;
  longDescription: string;
  keyFeatures: string[];
  solarBenefits: string[];
  landmarks: Landmark[];
  images: CityImage[];
}

export const cityData: Record<string, CityData> = {
  rockledge: {
    name: "Rockledge",
    state: "Florida",
    lat: 28.3147,
    lng: -80.7322,
    description: "Brevard County's oldest city, with a rich history of solar innovation.",
    longDescription: "Rockledge, Brevard County's oldest city, combines historic charm with modern sustainability initiatives. Strategically located along the Indian River, we proudly serve the Space Coast with our solar maintenance and installation services. With its rich history dating back to 1887, Rockledge exemplifies the perfect blend of historic preservation and renewable energy adoption.",
    keyFeatures: [
      "Central Space Coast Location",
      "Historic Riverfront Community",
      "Easy Access to All Service Areas",
      "Strong Local Business Partnerships",
      "Sustainable Energy Leadership"
    ],
    solarBenefits: [
      "Direct Access to Expert Service Team",
      "Rapid Response Maintenance",
      "Local Warranty Support",
      "Community-focused Solar Solutions",
      "Experienced Installation Teams"
    ],
    landmarks: [
      {
        name: "Rockledge Drive",
        image: "/rockledge/rockledge-drive-historic.jpg",
        description: "Historic riverside corridor featuring beautiful homes and scenic views."
      },
      {
        name: "Indian River",
        image: "/rockledge/rockledge-river-view.png",
        description: "Scenic waterway offering stunning views and recreational opportunities."
      },
      {
        name: "Historic Downtown",
        image: "/rockledge/rockledge-historic-downtown.jpg",
        description: "Charming district showcasing the city's rich heritage."
      },
      {
        name: "Waterfront Parks",
        image: "/rockledge/rockledge-waterfront-aerial.png",
        description: "Beautiful parks along the Indian River Lagoon."
      }
    ],
    images: [
      {
        src: IMAGES.gallery.maintenance,
        alt: 'Solar maintenance team at work in Rockledge',
        geoMetadata: {
          latitude: 28.3147,
          longitude: -80.7322,
          city: 'Rockledge',
          state: 'FL'
        }
      },
      {
        src: IMAGES.gallery.cleaning,
        alt: 'Professional solar panel cleaning in Rockledge',
        geoMetadata: {
          latitude: 28.3147,
          longitude: -80.7322,
          city: 'Rockledge',
          state: 'FL'
        }
      }
    ]
  },
  melbourne: {
    name: "Melbourne",
    state: "Florida",
    lat: 28.0836,
    lng: -80.6081,
    description: "A vibrant Space Coast city known for its blend of technology and coastal charm.",
    longDescription: "Melbourne, Florida, is a dynamic city where innovation meets coastal living. Home to the Florida Institute of Technology and numerous aerospace companies, it's a hub for technological advancement while maintaining its beautiful beaches and natural attractions. The city offers a perfect balance of urban amenities and outdoor recreation, making it an ideal location for solar energy adoption.",
    keyFeatures: [
      "High-tech aerospace industry presence",
      "Beautiful beaches and waterfront areas",
      "Growing sustainable energy community",
      "Excellent educational institutions",
      "Thriving downtown district"
    ],
    solarBenefits: [
      "Abundant sunshine for optimal solar production",
      "Strong support for renewable energy initiatives",
      "Increasing property values with solar installations",
      "Local incentives for solar adoption",
      "Protection against rising energy costs"
    ],
    landmarks: [
      {
        name: "Florida Institute of Technology",
        image: "/melbourne/florida-tech.jpeg",
        description: "A prestigious private research university known for its STEM programs and aerospace studies."
      },
      {
        name: "Melbourne Square",
        image: "/melbourne/melbourne-square.jpg",
        description: "The region's premier shopping destination with over 100 specialty stores."
      },
      {
        name: "Historic Downtown Melbourne",
        image: "/melbourne/historic-downtown.jpg",
        description: "A charming district featuring unique shops, restaurants, and historic architecture."
      },
      {
        name: "Indian River Lagoon",
        image: "/melbourne/indian-river-melbourne-florida.jpg",
        description: "One of North America's most diverse estuaries, home to thousands of species."
      },
      {
        name: "Melbourne Beach",
        image: "/melbourne/melbourne-beach.jpg",
        description: "A pristine Atlantic beach known for its surfing and sea turtle nesting."
      }
    ],
    images: [
      {
        src: IMAGES.gallery.cleaning,
        alt: 'Solar panel cleaning in Melbourne, Florida',
        geoMetadata: {
          latitude: 28.0836,
          longitude: -80.6081,
          city: 'Melbourne',
          state: 'FL'
        }
      },
      {
        src: IMAGES.gallery.residential,
        alt: 'Residential solar installation in Melbourne',
        geoMetadata: {
          latitude: 28.0836,
          longitude: -80.6081,
          city: 'Melbourne',
          state: 'FL'
        }
      }
    ]
  },
  veroBeach: {
    name: "Vero Beach",
    state: "Florida",
    lat: 27.6386,
    lng: -80.3973,
    description: "A charming coastal city known for its pristine beaches and cultural attractions.",
    longDescription: "Vero Beach combines the charm of a small town with the amenities of a larger city. Known as the 'Gateway to the Tropics,' it features beautiful beaches, cultural venues, and a strong commitment to environmental preservation. The city's year-round sunshine and growing focus on sustainability make it an excellent location for solar energy systems.",
    keyFeatures: [
      "Pristine Atlantic beaches",
      "Rich cultural heritage",
      "Thriving arts community",
      "Environmental conservation focus",
      "Year-round outdoor activities"
    ],
    solarBenefits: [
      "Ideal climate for solar energy production",
      "Growing eco-conscious community",
      "Enhanced property resale value",
      "Reduced carbon footprint",
      "Energy independence"
    ],
    landmarks: [
      {
        name: "McKee Botanical Garden",
        image: "/vero-beach/mckee-garden.jpg.crdownload",
        description: "An 18-acre tropical garden featuring native plants and historic structures."
      },
      {
        name: "Vero Beach Museum of Art",
        image: "/vero-beach/art-museum.JPG",
        description: "A premier cultural institution showcasing diverse art collections and exhibitions."
      },
      {
        name: "Downtown Vero Beach",
        image: "/vero-beach/downtown.jpg",
        description: "A vibrant district with unique shops, restaurants, and regular community events."
      },
      {
        name: "Jaycee Park",
        image: "/vero-beach/jaycee-park.png",
        description: "A beautiful oceanfront park perfect for picnics and beach activities."
      }
    ],
    images: [
      {
        src: IMAGES.gallery.aerial,
        alt: 'Aerial view of solar installations in Vero Beach',
        geoMetadata: {
          latitude: 27.6386,
          longitude: -80.3973,
          city: 'Vero Beach',
          state: 'FL'
        }
      },
      {
        src: IMAGES.gallery.efficiency,
        alt: 'Solar efficiency check in Vero Beach',
        geoMetadata: {
          latitude: 27.6386,
          longitude: -80.3973,
          city: 'Vero Beach',
          state: 'FL'
        }
      }
    ]
  },
  merrittIsland: {
    name: "Merritt Island",
    state: "Florida",
    lat: 28.3180,
    lng: -80.6659,
    description: "A unique barrier island community near the Kennedy Space Center.",
    longDescription: "Merritt Island is a fascinating blend of space-age technology and natural beauty. Home to the Kennedy Space Center and the Merritt Island National Wildlife Refuge, it offers residents and visitors an extraordinary mix of scientific achievement and environmental preservation. The area's commitment to innovation makes it a natural fit for advanced solar technology.",
    keyFeatures: [
      "Proximity to Kennedy Space Center",
      "Extensive wildlife refuge",
      "Waterfront living",
      "Space industry connection",
      "Natural conservation areas"
    ],
    solarBenefits: [
      "High solar energy potential",
      "Tech-savvy community",
      "Environmental preservation focus",
      "Increased home value",
      "Energy resilience"
    ],
    landmarks: [
      {
        name: "Kennedy Space Center",
        image: "/merritt-island/kennedy-space-center.webp",
        description: "NASA's launch headquarters and a major tourist attraction."
      },
      {
        name: "Merritt Island National Wildlife Refuge",
        image: "/merritt-island/wildlife-refuge.jpg",
        description: "A 140,000-acre sanctuary for diverse wildlife species."
      },
      {
        name: "Ulumay Wildlife Sanctuary",
        image: "/merritt-island/ulumay-sanctuary.webp",
        description: "A peaceful preserve showcasing Florida's natural beauty."
      },
      {
        name: "Kiwanis Island Park",
        image: "/merritt-island/kiwanis-park.jpg",
        description: "A recreational hub with sports facilities and water access."
      },
      {
        name: "Merritt Square Mall",
        image: "/merritt-island/merritt-square.jpg",
        description: "The area's premier shopping destination with diverse retail options."
      }
    ],
    images: [
      {
        src: IMAGES.gallery.maintenance,
        alt: 'Solar maintenance on Merritt Island',
        geoMetadata: {
          latitude: 28.3180,
          longitude: -80.6659,
          city: 'Merritt Island',
          state: 'FL'
        }
      },
      {
        src: IMAGES.gallery.cleaningProcess,
        alt: 'Professional solar cleaning on Merritt Island',
        geoMetadata: {
          latitude: 28.3180,
          longitude: -80.6659,
          city: 'Merritt Island',
          state: 'FL'
        }
      }
    ]
  },
  titusville: {
    name: "Titusville",
    state: "Florida",
    lat: 28.6122,
    lng: -80.8075,
    description: "Known as 'Space City, USA' due to its proximity to Kennedy Space Center.",
    longDescription: "Titusville holds a special place in America's space program history. As the gateway to the Kennedy Space Center, it offers unparalleled views of rocket launches and a strong connection to space exploration. The city combines this unique heritage with a growing focus on sustainable technology and environmental preservation.",
    keyFeatures: [
      "Prime rocket launch viewing",
      "Rich space history",
      "Waterfront location",
      "Historic downtown",
      "Nature preserves"
    ],
    solarBenefits: [
      "Excellent solar exposure",
      "Technology-friendly community",
      "Environmental awareness",
      "Energy cost reduction",
      "Sustainable development"
    ],
    landmarks: [
      {
        name: "Space View Park",
        image: "/titusville/space-view-park.jpeg",
        description: "The best public viewing site for rocket launches."
      },
      {
        name: "American Space Museum",
        image: "/titusville/space-museum.jpg",
        description: "A museum dedicated to preserving space program history."
      },
      {
        name: "Valiant Air Command Warbird Museum",
        image: "/titusville/warbird-museum.jpg",
        description: "Features restored vintage military aircraft."
      },
      {
        name: "Historic Downtown Titusville",
        image: "/titusville/historic-district.jpg",
        description: "A charming district with historic buildings and local businesses."
      }
    ],
    images: [
      {
        src: IMAGES.gallery.rooftop,
        alt: 'Rooftop solar array in Titusville',
        geoMetadata: {
          latitude: 28.6122,
          longitude: -80.8075,
          city: 'Titusville',
          state: 'FL'
        }
      },
      {
        src: IMAGES.gallery.dirty,
        alt: 'Before cleaning solar panels in Titusville',
        geoMetadata: {
          latitude: 28.6122,
          longitude: -80.8075,
          city: 'Titusville',
          state: 'FL'
        }
      }
    ]
  },
  palmBay: {
    name: "Palm Bay",
    state: "Florida",
    lat: 27.9909,
    lng: -80.6103,
    description: "A growing city known for its parks and natural preserves.",
    longDescription: "Palm Bay is Brevard County's largest city, offering a perfect blend of suburban comfort and natural beauty. With numerous parks and preserves, it provides residents with abundant outdoor recreation opportunities while maintaining a strong focus on sustainable development and environmental stewardship.",
    keyFeatures: [
      "Extensive park system",
      "Growing residential areas",
      "Natural preserves",
      "Family-friendly community",
      "Outdoor recreation"
    ],
    solarBenefits: [
      "Ideal solar conditions",
      "Growing green initiatives",
      "Reduced utility costs",
      "Increased property value",
      "Environmental protection"
    ],
    landmarks: [
      {
        name: "Turkey Creek Sanctuary",
        image: "/palm-bay/turkey-creek.jpeg",
        description: "A 130-acre nature preserve with boardwalks and wildlife viewing."
      }
    ],
    images: [
      {
        src: IMAGES.beforeAfter.poolSolar1,
        alt: 'Pool solar panel maintenance in Palm Bay',
        geoMetadata: {
          latitude: 27.9909,
          longitude: -80.6103,
          city: 'Palm Bay',
          state: 'FL'
        }
      },
      {
        src: IMAGES.gallery.cleaning,
        alt: 'Solar panel cleaning service in Palm Bay',
        geoMetadata: {
          latitude: 27.9909,
          longitude: -80.6103,
          city: 'Palm Bay',
          state: 'FL'
        }
      }
    ]
  }
};

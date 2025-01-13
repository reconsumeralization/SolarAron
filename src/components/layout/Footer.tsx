import { Link } from 'react-router-dom';

import { theme } from '@/lib/theme';

export default function Footer() {
  return (
    <footer className="bg-blue-100/80 dark:bg-blue-900/30 text-foreground">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
        <div>
          <h2 className="text-xl font-bold mb-4 text-foreground">{theme.values.companyName}</h2>
          <p className="text-muted-foreground">
            Professional solar maintenance and repair services across Florida
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-foreground">Contact</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>{theme.values.phone}</li>
            <li>{theme.values.email}</li>
            <li>{theme.values.address}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
            <li><Link to="/packages" className="text-muted-foreground hover:text-foreground transition-colors">Packages</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-foreground">Service Areas</h3>
          <ul className="text-muted-foreground">
            {theme.values.serviceAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground py-4">
          © {new Date().getFullYear()} {theme.values.companyName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

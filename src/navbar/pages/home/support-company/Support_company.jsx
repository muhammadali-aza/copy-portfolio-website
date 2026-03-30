import './Support_company.css';
import Logo1 from '../../../../assets/support_company_logo/company-logo-1.svg';
import Logo2 from '../../../../assets/support_company_logo/company-logo-2.svg';
import Logo3 from '../../../../assets/support_company_logo/company-logo-3.svg';
import Logo4 from '../../../../assets/support_company_logo/company-logo-4.svg';
import Logo5 from '../../../../assets/support_company_logo/company-logo-5.svg';
import Logo6 from '../../../../assets/support_company_logo/company-logo-6.svg';
import Logo7 from '../../../../assets/support_company_logo/company-logo-7.svg';
import Logo8 from '../../../../assets/support_company_logo/company-logo-8.svg';

const logos = [
  { name: 'Company 1', src: Logo1 },
  { name: 'Company 2', src: Logo2 },
  { name: 'Company 3', src: Logo3 },
  { name: 'Company 4', src: Logo4 },
  { name: 'Company 5', src: Logo5 },
  { name: 'Company 6', src: Logo6 },
  { name: 'Company 7', src: Logo7 },
  { name: 'Company 8', src: Logo8 },
];

export default function Support_company() {
  return (
    <div className="support-company-bg">
      <div className="support-company-grid">
        {logos.map((logo) => (
          <div className="support-company-cell" key={logo.name}>
            <img
              className="support-company-logo"
              src={logo.src}
              alt={logo.name}
              title={logo.name}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
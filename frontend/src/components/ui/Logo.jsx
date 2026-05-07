import logoImage from '../../assets/LogoPlanit.png'; 
import './Logo.css';

export function Logo() {
  return (
    <div className="logo-component-container">
      <img 
        src={logoImage} 
        alt="Taskify Logo" 
        className="logo-image-asset" 
      />
    </div>
  );
}
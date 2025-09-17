/* style.css */

body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
  color: #333;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #002b5b;
  color: white;
  flex-wrap: wrap;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
}

.logo .accent {
  color: #00aaff;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.hero {
  position: relative;
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(to right, #007acc, #00aaff);
  color: white;
}

.hero-content h2 span {
  color: #ffe600;
}

.hero-content .btn {
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  background-color: white;
  color: #007acc;
  text-decoration: none;
  font-weight: 600;
  border-radius: 5px;
}

.section {
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.section.dark {
  background-color: #002b5b;
  color: white;
  max-width: none;
  width: 94%;
  padding-left: 3%;
  padding-right: 3%;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.project-card {
  background-color: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  color: #333;
}

.project-card img {
  max-width: 100%;
  border-radius: 5px;
  height: auto;
}

.project-card .btn-sm {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #007acc;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}

footer {
  text-align: center;
  padding: 2rem;
  background-color: #001f3f;
  color: white;
}

.profile-pic {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 2rem;
}

.full-banner img {
  width: 100%;
  display: block;
  object-fit: cover;
}

.contact-info {
  font-size: 1.2rem;
  line-height: 2;
}

.contact-info a {
  color: #00cfff;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-links {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 0.5rem;
  }

  .profile-pic {
    margin: 0 auto 2rem auto;
    display: block;
  }

  .section {
    padding: 2rem 1rem;
  }

  .hero-content h2 {
    font-size: 1.75rem;
  }

  .hero-content p {
    font-size: 1.2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .contact-info {
    font-size: 1rem;
  }
}

.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* === Skills Section Styles === */
.skills-section {
  padding: 4rem 2rem;
  background-color: #fdfdfd;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #111;
  font-weight: 700;
}

.skills-category {
  margin-bottom: 3rem;
}

.skills-category h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #444;
  border-bottom: 2px solid #ddd;
  display: inline-block;
  padding-bottom: 0.3rem;
}

.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center; /* Center the row of cards */
  align-items: center;      /* Vertically align if needed */
  margin-top: 1rem;
}

.skill-card {
  background-color: #ffffff;
  border: 1px solid #e2e2e2;
  padding: 1rem 0.5rem;
  border-radius: 10px;
  font-weight: 500;
  color: #333;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 180px;
  cursor: default;

  /* Center content without stretching the card */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  /* This prevents stretch */
  height: auto;
  min-height: 60px;
}

.skill-card:hover {
  background-color: #dff6ff;
  color: #111;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transform: translateY(-4px) scale(1.03);
  border-color: #00bfff;
}

/* === Certificates Section === */
.certificates-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
}

.certificate-card {
  background-color: #ffffff;
  border: 1px solid #dcdcdc;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 8px 18px rgba(0,0,0,0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  max-width: 1000px; /* large card width */
  width: 100%;
}

.certificate-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 14px 24px rgba(0,0,0,0.18);
}

.certificate-img {
  width: 95%;
  max-width: 850px;  /* very large image */
  max-height: 500px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 2rem;
}

.certificate-card h3 {
  margin: 0.8rem 0;
  font-size: 2rem; /* bigger heading */
  color: #007acc;
}

.certificate-card p {
  margin: 0.5rem 0;
  font-size: 1.3rem;
  color: #444;
}

.credential-note {
  font-size: 1.1rem;
  font-style: italic;
  color: #777;
}


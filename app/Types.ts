export type ServiceInterface = {
  id: string;
  title: string;
  description: string;
  ImageUrl: string;
  linkto: string;
}

export type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  submittedAt: string;
}

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  imageUrl: string;
  bio: string;
}

export type Client = {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  imageUrl: string;
  projectCount: number;
}

export type SocialLink = {
  id: string;
  platform: string;
  url: string;
  iconName: string;
}

export type WebsiteMetadata = {
  receivingEmail: string;
  logoUrl: string;
  section3dTitle: string;
  section3dDescription: string;
  section3dSubtext: string;
  scene3dFiles: string[];
  missionText: string;
}
export interface BaseEntity {
  _id: string; // MongoDB ObjectId
  createdAt: Date;
  updatedAt: Date;
}

// ----------------------------------------------------
// Users Base Models & DTOs
// ----------------------------------------------------
export type UserDB = BaseEntity & {
  email: string;
  passwordHash: string;
  refreshToken?: string;
  role: 'admin';
};

export type UserProfile = Omit<UserDB, 'passwordHash' | 'refreshToken'>;
export type LoginRequest = Pick<UserDB, 'email'> & { password: string };

// ----------------------------------------------------
// Services Base Models & DTOs
// ----------------------------------------------------
export type ServiceInterface = {
  id: string;
  title: string;
  description: string;
  ImageUrl: string;
  linkto: string;
};

export type ServiceDB = Omit<ServiceInterface, 'id'> & BaseEntity;
export type ServiceCreateDTO = Omit<ServiceInterface, 'id'>;
export type ServiceUpdateDTO = Partial<ServiceCreateDTO>;

// ----------------------------------------------------
// Form Submissions Base Models & DTOs
// ----------------------------------------------------
export type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  submittedAt: string;
};

export type ContactSubmissionDB = Omit<ContactSubmission, 'id'> & BaseEntity;
export type ContactSubmissionCreateDTO = Omit<ContactSubmission, 'id' | 'submittedAt'>;

// ----------------------------------------------------
// Team Base Models & DTOs
// ----------------------------------------------------
export type TeamMember = {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  imageUrl: string;
  bio: string;
};

export type TeamMemberDB = Omit<TeamMember, 'id'> & BaseEntity;
export type TeamMemberCreateDTO = Omit<TeamMember, 'id'>;
export type TeamMemberUpdateDTO = Partial<TeamMemberCreateDTO>;

// ----------------------------------------------------
// Clients Base Models & DTOs
// ----------------------------------------------------
export type Client = {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  imageUrl: string;
  projectCount: number;
};

export type ClientDB = Omit<Client, 'id'> & BaseEntity;
export type ClientCreateDTO = Omit<Client, 'id'>;
export type ClientUpdateDTO = Partial<ClientCreateDTO>;

// ----------------------------------------------------
// Settings Base Models & DTOs
// ----------------------------------------------------
export type SocialLink = {
  id: string;
  platform: string;
  url: string;
  iconName: string;
};

export type WebsiteMetadata = {
  receivingEmail: string;
  logoUrl: string;
  section3dTitle: string;
  section3dDescription: string;
  section3dSubtext: string;
  scene3dFiles: string[];
  missionText: string;
};

// Represents the single document in the `settings` collection
export type SettingsDB = BaseEntity & {
  socialLinks: (Omit<SocialLink, 'id'> & { id: string })[]; 
  metadata: WebsiteMetadata;
};
export type SettingsUpdateDTO = Partial<Omit<SettingsDB, '_id' | 'createdAt' | 'updatedAt'>>;

// ----------------------------------------------------
// Authentication Service Responses
// ----------------------------------------------------
export type AuthRequest = LoginRequest;

export type AuthServiceResponse = {
  errorNumber?: number;
  message: string;
  token?: string; // Access Token
};

export type AuthResponse = Partial<AuthServiceResponse>;

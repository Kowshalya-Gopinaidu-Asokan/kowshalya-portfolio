export interface SocialLinks {
  email: string
  phone: string
  linkedin: string
  github: string
  location: string
}

export interface PersonalInfo {
  name: string
  firstName: string
  role: string
  /** Single line of main skills, typed out once under the role. */
  skillsLine: string
  experienceYears: string
  location: string
  workAuth: string
  availability: string
  summary: string[]
  social: SocialLinks
}

export interface AboutFact {
  id: string
  label: string
  value: string
  detail: string
  icon: string
}

export interface Language {
  name: string
  level: string
  fluency: number // 0-100
}

export interface CareerStop {
  id: string
  company: string
  role: string
  location: string
  period: string
  summary: string
  /** Single, unified list of responsibilities + achievements for this role. */
  highlights?: string[]
  techStack?: string[]
  isFuture?: boolean
}

export type SkillCategory =
  | 'frontend'
  | 'architecture'
  | 'ux'
  | 'testing'
  | 'apis'
  | 'tools'
  | 'ai'

export interface Skill {
  id: string
  name: string
  category: SkillCategory
}

export interface Project {
  id: string
  title: string
  tagline: string
  type: 'professional' | 'personal'
  company?: string
  period?: string
  overview: string
  features: string[]
  techStack: string[]
  linkLabel: string
  linkUrl?: string
  metric?: { label: string; value: string }
}

export interface AwardItem {
  id: string
  title: string
  organization: string
  description: string
  icon: string
}

export interface StatItem {
  id: string
  value: number
  suffix: string
  label: string
}

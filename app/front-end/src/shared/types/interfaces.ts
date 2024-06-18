export interface PositionProps {
  x: number;
  y: number;
}

export interface CreateUserProps {
  name: string;
  password: string;
  email?: string;
  avatar?: string;
}

export interface UsersProps {
  name: string;
  password: string;
  packsIds?: number[];
  achievements?: number[];
}

export interface PacksProps {
  name: string;
  icon: string;
  part: string;
}

export interface StepsProps {
  label: string;
  tasks: string[];
}

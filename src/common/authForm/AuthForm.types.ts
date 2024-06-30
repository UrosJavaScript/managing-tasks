export interface AuthFormProps {
  title: string;
  subtitle: string;
  onSubmit: (data: FormData) => void;
  error?: string | null;
  isLoading?: boolean | string;
}

export interface FormData {
  email: string;
  password: string;
}

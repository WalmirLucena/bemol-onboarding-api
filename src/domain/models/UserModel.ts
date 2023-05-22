interface UserModel {
  id: number;
  email: string;
  password: string;
  name: string;
  birthdate: Date;
  phone_number: string;
  city: string;
  cpf: string;
  state: string;
  cep: string;
  address: string;
  address_number: string;
  created_at: Date;
  updated_at: Date;
}

interface ProtectedUserModel {
  id: number;
  email: string;
  name: string;
  birthdate: Date;
  phone_number: string;
  city: string;
  cpf: string;
  state: string;
  cep: string;
  address: string;
  address_number: string;
  created_at: Date;
  updated_at: Date;
}

export { UserModel, ProtectedUserModel };

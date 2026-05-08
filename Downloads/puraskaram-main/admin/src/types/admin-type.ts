export interface IAdminRegisterAdd {
  name: string;
  email: string;
  password: string;
}

export interface IAdminLoginAdd {
  email: string;
  password: string;
}

export interface IAdminLoginRes {
  _id: string;
  name: string;
  image?: string;
  email: string;
  phone?: string;
  role?: string;
  status?: string;
  joiningDate?: string;
}

export interface IAdminRegisterRes {
  _id: string;
  name: string;
  email: string;
  role: string;
  joiningDate?: string;
  status?: string;
}

export interface IAdminUpdate {
  name?: string;
  image?: string;
  email?: string;
  phone?: string;
  role?: string;
  joiningDate?: string;
}

export interface IAdminUpdateRes {
  _id: string;
  name: string;
  image?: string;
  email: string;
  phone?: string;
  role: string;
  status?: string;
  joiningDate?: string;
}

export interface IAddStuff {
  name: string;
  email: string;
  password?: string;
  image?: string;
  role?: string;
  phone?: string;
  joiningDate?: string;
}

export interface IStuff {
  _id: string;
  name: string;
  image?: string;
  address?: string;
  country?: string;
  city?: string;
  email: string;
  phone?: string;
  status?: "Active" | "Inactive";
  role: "Admin" | "Super Admin" | "Manager" | "CEO";
  joiningDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface IAdminGetRes {
  status: boolean;
  message: string;
  data: IStuff[];
}

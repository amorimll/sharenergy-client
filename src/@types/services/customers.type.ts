export type GetAllCustomers = (localToken: any, sessionToken: any) => Promise<any>;

export type CreateCustomer = (
  localToken: any,
  sessionToken: any,
  name: string,
  email: string,
  phone: string,
  address: string,
  cpf: string
) => Promise<any>;

export type EditCustomer = (
  localToken: any,
  sessionToken: any,
  id: string,
  name: string,
  email: string,
  phone: string,
  address: string,
  cpf: string
) => Promise<any>;

export type DeleteCustomer = (localToken: any, sessionToken: any, id: any) => Promise<any>;

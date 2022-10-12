interface ITypeInputUser {
  type: string;
  setUser(prevState: any): void;
}

export const typeInputUser = ({type, setUser}: ITypeInputUser) => {
  if(type === 'name'){
    return setUser((prevState: any) => ({ ...prevState, type: event.target.value }));
  } else if (type === 'email'){
    return setUser(prevState => ({ ...prevState, email: event.target.value }));
  } else if (type === 'whatsapp'){
    return setUser(prevState => ({ ...prevState, whatsapp: event.target.value }));
  } else if (type === 'congregation'){
    return setUser(prevState => ({ ...prevState, congregation: event.target.value }));
  }
}
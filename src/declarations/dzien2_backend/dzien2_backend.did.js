export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'dodaj_wpis' : IDL.Func([IDL.Text], [], []),
    'greet' : IDL.Func([IDL.Text, IDL.Int8], [IDL.Text], ['query']),
    'odczytaj_wpisy' : IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };

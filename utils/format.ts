

export const formatMoney = (value:number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "COP",
    }).format(value);
  };
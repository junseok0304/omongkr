export const saveUrl = (url: string, short: string, extra: any = {}) => {
    const data = {
        url,
        short,
        ...extra,
        date: new Date().toISOString(),
    };
    const prev = JSON.parse(localStorage.getItem("shorty") || "[]");
    const updated = [...prev, data];
    localStorage.setItem("shorty", JSON.stringify(updated));
};

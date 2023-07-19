type TSlash = `/${string}`;
type THashTag = `#${string}`;
type TImageType = "png" | "jpg" | "jpeg" | "webp";

export type TArr<T> = T[];
export type TImgPath = `${TSlash}.${TImageType}`;
export type TLinkPath = `${TSlash}` | THashTag;

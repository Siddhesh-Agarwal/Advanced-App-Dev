export type Theme = {
    themeID: number;
    themeName: string;
    themeImageURL: string;
    themeDescription: string;
    themePhotographer: string;
    themeVideographer: string;
    themeReturnGift: string;
    themeCost: number;
}

export type ThemePreview = Pick<Theme, "themeID" | "themeImageURL" | "themeName" | "themeDescription">

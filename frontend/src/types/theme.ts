export type Theme = {
    themeId: number;
    themeName: string;
    themeImageURL: string;
    themeDescription: string;
    themePhotographer: string;
    themeVideographer: string;
    themeReturnGift: string;
    themeCost: number;
}

export type ThemePreview = Pick<Theme, "themeId" | "themeImageURL" | "themeName" | "themeDescription">

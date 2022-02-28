declare interface DonationEntry {
    amount: string,
    date: Date,
    donor: number,
    isPublic: boolean,
}

export type { DonationEntry }
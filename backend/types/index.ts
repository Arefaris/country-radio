export type radio = {
    country: string,
    tag: string
}

export type apiStation = {
    changeId: string,
    id: string,
    name: string,
    url: string,
    urlResolved: string,
    homepage: string,
    favicon: string,
    country: string,
    countryCode: string,
    state: string,
    votes: number,
    codec: string,
    bitrate: string,
    clickCount: number,
    clickTrend: number,
    hls: boolean,
    lastCheckOk: boolean,
    lastChangeTime: Date,
    lastCheckOkTime: Date,
    clickTimestamp: Date,
    lastLocalCheckTime: Date,
    language: string[],
    lastCheckTime: Date,
    tags: string[]  
}
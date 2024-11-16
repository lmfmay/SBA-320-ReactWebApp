//for the purposes of this project, the keys for accent, gender, and voice have been taken from a separate playHT endpoint
//in the real world, 'textToAudio' won't be needed for conversion, and the keys listed above will be populated by users as they create their profiles
export const userProfiles = [
    {
        name: "Charlotte Johnson",
        description: "A voice talent specializing in narrations and commercials.",
        textToAudio: "Hi",
        accent: "canadian",
        gender: "female",
        voice_sample: "s3://voice-cloning-zero-shot/a59cb96d-bba8-4e24-81f2-e60b888a0275/charlottenarrativesaad/manifest.json"
    },
    {
        name: "David Adolfo",
        description: "A voice talent specializing in audiobooks.",
        textToAudio: "Hi",
        accent: "american",
        gender: "male",
        voice_sample: "s3://voice-cloning-zero-shot/d82d246c-148b-457f-9668-37b789520891/adolfosaad/manifest.json"
    },
    {
        name: "Navya",
        description: "A voice talent specializing in audiobooks.",
        textToAudio: "Hi",
        accent: "indian",
        gender: "female",
        voice_sample: "s3://voice-cloning-zero-shot/e5df2eb3-5153-40fa-9f6e-6e27bbb7a38e/original/manifest.json"
    },
    {
        name: "Wilbert",
        description: "A voice talent specializing in audiobooks.",
        textToAudio: "Hi",
        accent: "british",
        gender: "female",
        voice_sample: "//voice-cloning-zero-shot/5cd30986-f7f7-444b-ad82-d08ceb24ec5f/wilbertsaad/manifest.json"
    },
]

// pre-built voice samples extracted from playHT api/v2/voices endpoint. for purposes of this project, will use text-to-speech endpoint instead of directly playing sample from this api.
// const preBuiltVoices = [
//     {
//       "id": "s3://voice-cloning-zero-shot/d82d246c-148b-457f-9668-37b789520891/adolfosaad/manifest.json",
//       "name": "Adolfo",
//       "sample": "https://parrot-samples.s3.amazonaws.com/kettle/adolfo.wav",
//       "accent": "american",
//       "age": "adult",
//       "gender": "male",
//       "language": "English (US)",
//       "language_code": "en-US",
//       "loudness": "neutral",
//       "style": "narrative",
//       "tempo": "fast",
//       "texture": "thick",
//       "is_cloned": false,
//       "voice_engine": "PlayHT2.0"
//     },
//     {
//       "id": "s3://voice-cloning-zero-shot/a59cb96d-bba8-4e24-81f2-e60b888a0275/charlottenarrativesaad/manifest.json",
//       "name": "Charlotte (Narrative)",
//       "sample": "https://parrot-samples.s3.amazonaws.com/kettle/charlotte+(narrative).wav",
//       "accent": "canadian",
//       "age": "adult",
//       "gender": "female",
//       "language": "English (CA)",
//       "language_code": "en-CA",
//       "loudness": "low",
//       "style": "narrative",
//       "tempo": "neutral",
//       "texture": "smooth",
//       "is_cloned": false,
//       "voice_engine": "PlayHT2.0"
//     },
//     {
//       "id": "s3://voice-cloning-zero-shot/e5df2eb3-5153-40fa-9f6e-6e27bbb7a38e/original/manifest.json",
//       "name": "Navya",
//       "sample": "https://parrot-samples.s3.amazonaws.com/gargamel/Navya.wav",
//       "accent": "indian",
//       "age": null,
//       "gender": "female",
//       "language": "English (IN)",
//       "language_code": "en-IN",
//       "loudness": null,
//       "style": null,
//       "tempo": null,
//       "texture": null,
//       "is_cloned": false,
//       "voice_engine": "PlayHT2.0"
//     },

//     {
//         "id": "s3://voice-cloning-zero-shot/5cd30986-f7f7-444b-ad82-d08ceb24ec5f/wilbertsaad/manifest.json",
//         "name": "Wilbert",
//         "sample": "https://parrot-samples.s3.amazonaws.com/kettle/wilbert.wav",
//         "accent": "british",
//         "age": "adult",
//         "gender": "male",
//         "language": "English (US)",
//         "language_code": "en-US",
//         "loudness": "neutral",
//         "style": "narrative",
//         "tempo": "neutral",
//         "texture": "round",
//         "is_cloned": false,
//         "voice_engine": "PlayHT2.0"
//       },
//     ]
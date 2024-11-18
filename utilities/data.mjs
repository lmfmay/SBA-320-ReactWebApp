//for the purposes of this project, the voice_sample key have been manually selected for each userProfile.
//in the real world, this voice sample will be uploaded by the user.
export const userProfiles = [
    {
        name: "Charlotte Johnson",
        description: "A voice talent specializing in delivering personal messages and audiobook narrations.",
        accent: "canadian",
        gender: "female",
        voice_sample: "s3://voice-cloning-zero-shot/a59cb96d-bba8-4e24-81f2-e60b888a0275/charlottenarrativesaad/manifest.json"
    },
    {
        name: "David Adolfo",
        description: "A voice talent specializing in audiobooks and translations.",
        accent: "american",
        gender: "male",
        voice_sample: "s3://voice-cloning-zero-shot/d82d246c-148b-457f-9668-37b789520891/adolfosaad/manifest.json"
    },
    {
        name: "Navya",
        description: "A voice talent specializing in audiobooks.",
        accent: "indian",
        gender: "female",
        voice_sample: "s3://voice-cloning-zero-shot/e5df2eb3-5153-40fa-9f6e-6e27bbb7a38e/original/manifest.json"
    },
    {
        name: "Arthur",
        description: "A voice talent specializing in podcasts and audiobooks.",
        accent: "british",
        gender: "male",
        voice_sample: "s3://voice-cloning-zero-shot/38a41ac2-f574-421c-adb9-ce1bcb6f4a84/arthurmeditationsaad/manifest.json"
    },
]

// pre-built voice samples extracted from playHT api/v2/voices endpoint. id key in this data matches voice_sample key above
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
    //   "id": "s3://voice-cloning-zero-shot/38a41ac2-f574-421c-adb9-ce1bcb6f4a84/arthurmeditationsaad/manifest.json",
    //   "name": "Arthur (Meditation)",
    //   "sample": "https://peregrine-results.s3.amazonaws.com/pigeon/1kdv17L92N1otdit39_0.mp3",
    //   "accent": "british",
    //   "age": "adult",
    //   "gender": "male",
    //   "language": "English (GB)",
    //   "language_code": "en-GB",
    //   "loudness": "neutral",
    //   "style": "meditation",
    //   "tempo": "neutral",
    //   "texture": "smooth",
    //   "is_cloned": false,
    //   "voice_engine": "PlayHT2.0"
    // },
//     ]
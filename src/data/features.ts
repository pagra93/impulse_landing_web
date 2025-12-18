
export interface Feature {
    id: string;
    title: string;
    description: string;
    status: 'planned' | 'in-progress' | 'done';
    votes: number;
}

export const features: Feature[] = [
    {
        id: '1',
        title: 'iOS App',
        description: 'A dedicated iOS application to sync your focus sessions and blocking rules across devices.',
        status: 'done',
        votes: 324,
    },
    {
        id: '2',
        title: 'Android App',
        description: 'We are working on bringing Impulse to Android. Get notified when it launches!',
        status: 'planned',
        votes: 156,
    },
    {
        id: '3',
        title: 'Custom Block Lists',
        description: 'Create and share your own custom block lists for specific workflows (e.g., "Deep Work", "Social Detox").',
        status: 'in-progress',
        votes: 89,
    },
    {
        id: '4',
        title: 'Schedule Blocking',
        description: 'Set recurring times for blocking to automatically turn on during your work hours.',
        status: 'planned',
        votes: 45,
    },
    {
        id: '5',
        title: 'Password Protection',
        description: 'Require a password to disable a blocking session early (for the extra disciplined).',
        status: 'planned',
        votes: 21,
    },
];

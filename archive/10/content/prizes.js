export const title = 'Prizes';
export const note = 'Each winning team member will receive the prize.';

export const places = [
    {
        place: "1st Place",
        prize: "4K LG Monitors"
    },
    {
        place: "2nd Place",
        prize: "Oculus Gos"
    },
    {
        place: "3rd Place",
        prize: "JBL Speakers"
    }
].map(prize => {prize.key = `item-${prize.place}`;
    return prize;});

export const trackWinners = [
    {

        place: "First Timers Track",
        prize: "Nintendo Switches"
    },
    {
        place: "Data Science Track",
        prize: "BOSE Sunglasses"
    },
    {
        place: "x Track",
        prize: "x"
    },
    {
        place: "Design Track",
        prize: "Polaroid Cameras"
    }
].map(prize => {prize.key = `item-${prize.place}`;
    return prize;});





import Hero from '@/pages/hero'
import Events from '@/pages/events'
import Location from '@/pages/location';
import Wishes from '@/pages/wishes';
import Gifts from '@/pages/gifts';

// Main Invitation Content
export default function MainContent() {
    return (
        <>
            <Hero />
            <Events />
            <Location />
            <Gifts />
            <Wishes />
        </>
    )
}
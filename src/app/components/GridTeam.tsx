export default function GridTeam() {
    const teams = ["cardinals", "falcons", "ravens", "bills", "panthers", "bears", "bengals", "browns", "cowboys", "broncos", "lions", "packers", "texans", "colts", "jaguars", "chiefs", "raiders", "chargers", "rams", "dolphins", "vikings", "patriots", "saints", "giants", "jets", "eagles", "steelers", "49ers", "seahawks", "buccaneers", "titans", "commanders"];
    const index = Math.floor(Math.random() * 32)
    const team = teams[index] + ".png"
    return (
        <div className="h-50">
            <img src={`/${team}`}></img>
        </div>
    );
}
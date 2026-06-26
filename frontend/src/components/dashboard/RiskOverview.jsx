function ProgressBar({ color, value, total }) {

    const width =
        total === 0
            ? 0
            : (value / total) * 100;

    return (

        <div className="mb-6">

            <div className="flex justify-between mb-2">

                <span className="font-medium">
                    {color === "green"
                        ? "🟢 Low Risk"
                        : color === "yellow"
                        ? "🟡 Medium Risk"
                        : "🔴 High Risk"}
                </span>

                <span>{value}</span>

            </div>

            <div className="w-full h-3 rounded-full bg-gray-200">

                <div

                    className={`h-3 rounded-full ${
                        color === "green"
                            ? "bg-green-500"
                            : color === "yellow"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                    }`}

                    style={{
                        width: `${width}%`,
                    }}

                />

            </div>

        </div>

    );

}

export default function RiskOverview({ tasks = [] }) {

    const low =
        tasks.filter(
            task => task.riskScore < 40
        ).length;

    const medium =
        tasks.filter(
            task =>
                task.riskScore >= 40 &&
                task.riskScore < 80
        ).length;

    const high =
        tasks.filter(
            task => task.riskScore >= 80
        ).length;

    return (

        <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-2xl font-bold mb-6">

                🔥 Risk Overview

            </h2>

            <ProgressBar
                color="green"
                value={low}
                total={tasks.length}
            />

            <ProgressBar
                color="yellow"
                value={medium}
                total={tasks.length}
            />

            <ProgressBar
                color="red"
                value={high}
                total={tasks.length}
            />

        </div>

    );

}
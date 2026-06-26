function InsightCard({
    icon,
    title,
    text,
    color,
}) {
    return (
        <div
            className={`
                bg-slate-50
                rounded-xl
                border-l-4
                ${color}
                p-5
            `}
        >
            <h3 className="font-bold text-lg mb-2">
                {icon} {title}
            </h3>

            <p className="text-gray-600">
                {text}
            </p>
        </div>
    );
}

export default function AIInsights({
    insights,
}) {

    if (!insights) {
        return (
            <div className="bg-white rounded-xl shadow p-6 mt-6">

                <h2 className="text-2xl font-bold">

                    💡 AI Insights

                </h2>

                <p className="mt-5 text-gray-500">

                    No insights available.

                </p>

            </div>
        );
    }

    return (

        <div className="bg-white rounded-xl shadow p-6 mt-6">

            <h2 className="text-2xl font-bold mb-6">

                💡 AI Insights

            </h2>

            <div className="grid md:grid-cols-2 gap-5">

                <InsightCard
                    icon="📈"
                    title="Productivity"
                    text={insights.productivity}
                    color="border-blue-500"
                />

                <InsightCard
                    icon="⚠"
                    title="Workload Alert"
                    text={insights.workload}
                    color="border-red-500"
                />

                <InsightCard
                    icon="🔥"
                    title="Recommendation"
                    text={insights.recommendation}
                    color="border-orange-500"
                />

                <InsightCard
                    icon="🧠"
                    title="AI Suggestion"
                    text={insights.suggestion}
                    color="border-purple-500"
                />

                <InsightCard
                    icon="🎯"
                    title="Focus of the Day"
                    text={insights.focus}
                    color="border-green-500"
                />

            </div>

        </div>

    );

}
export const calculateClutchScore = ({
    riskScore,
    progress,
}) => {

    return Math.max(

        0,

        Math.min(

            100,

            100
            - (riskScore * 0.7)
            + (progress * 0.3)

        )

    );

};
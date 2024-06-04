import React, { useState } from "react";

export const EnemyShop = () => {
    const [enemyList, setEnemyList] = useState([
        { name: 'vilao1' },
        { name: 'vilao2' },
        { name: 'vilao3' },
        { name: 'vilao4' }
    ]);

    return <div>
        {
            enemyList.map(enemy => {
                return <div>
                    {enemy.name}
                </div>
            })
        }
    </div>
};
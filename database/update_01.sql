-- ------------------------------
-- Author: Jacob Mills
-- Date: 07/09/23
-- Asana Task: https://app.asana.com/0/1204113129752279/1204752567040536
-- Description: This script adds spaces between song names in the
--              Soul On Fire album playlist / album.
-- ------------------------------


UPDATE `tafdb`.`Song`
SET name = 'Free Your Mind'
WHERE name = 'FreeYourMind';

UPDATE `tafdb`.`Song`
SET name = 'Jumping It Up'
WHERE name = 'JumpingItUp';

UPDATE `tafdb`.`Song`
SET name = 'Heaven Light My Candle'
WHERE name = 'HeavenLightMyCandle';

UPDATE `tafdb`.`Song`
SET name = 'The Distance Between Us'
WHERE name = 'TheDistanceBetweenUs';

UPDATE `tafdb`.`Song`
SET name = 'Soul On Fire'
WHERE name = 'SoulOnFire';

UPDATE `tafdb`.`Song`
SET name = 'Abyss of Bliss'
WHERE name = 'AbyssOfBliss';

UPDATE `tafdb`.`Song`
SET name = 'Bring It Back'
WHERE name = 'BringItBack';
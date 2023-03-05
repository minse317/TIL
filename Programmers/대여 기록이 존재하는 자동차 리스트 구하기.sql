SELECT DISTINCT(CRCR.CAR_ID)
FROM CAR_RENTAL_COMPANY_CAR AS CRCR
INNER JOIN CAR_RENTAL_COMPANY_RENTAL_HISTORY AS CRCRH
ON CRCR.CAR_ID = CRCRH.CAR_ID
WHERE CRCR.CAR_TYPE = '세단'
AND MONTH(CRCRH.START_DATE) = 10
ORDER BY CRCR.CAR_ID DESC

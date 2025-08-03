var obj = JSON.parse($response.body);
obj.data.ticketReleaseTime="07:00:00";
$done({body: JSON.stringify(obj)});
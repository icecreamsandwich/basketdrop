<?php

include("connection.php");

$action = $_POST['action'];

// get current date and time
date_default_timezone_set('Asia/Calcutta');
$creatred_at = date('d/m/Y h:i:s a', time());

switch ($action) {
    case 'loadbasket1':
        $result = mysql_query("select * from users");
        if ($result) {
            $jsonData = array();
            while ($array = mysql_fetch_row($result, MYSQL_ASSOC)) {
                $jsonData[] = $array;
            }
            foreach ($jsonData as $key => $value) {
                $row_array['id'] = $value['id'];
                $row_array['user_name'] = $value['user_name'];
            }
            array_push($jsonData, $row_array);
            echo json_encode($jsonData);
        }

        else
            echo mysql_error();
        break;
    case 'loadbasket2':
        $result = mysql_query("select * from user_group");
        if ($result) {
            $jsonData = array();
            while ($array = mysql_fetch_row($result, MYSQL_ASSOC)) {
                $jsonData[] = $array;
            }
            foreach ($jsonData as $key => $value) {
                $row_array['id'] = $value['id'];
                $row_array['group_name'] = $value['group_name'];
            }
            array_push($jsonData, $row_array);
            echo json_encode($jsonData);
        }

        else
            echo mysql_error();
        break;
    case 'loadbasketContainer':
        $result = mysql_query("select * from users");
        if ($result) {
            $jsonData = array();
            while ($array = mysql_fetch_row($result, MYSQL_ASSOC)) {
                $jsonData[] = $array;
            }
            foreach ($jsonData as $key => $value) {
                $row_array['id'] = $value['id'];
                $row_array['user_name'] = $value['user_name'];
            }
            array_push($jsonData, $row_array);
            echo json_encode($jsonData);
        }

        else
            echo mysql_error();
        break;
    case 'loadbasketContainer2':
        $group_id = $_POST['data'];
        $result = mysql_query("select * from usergroup_user_map uum where uum.id=$group_id
                LEFT JOIN users u ON uum.user_id=u.id
                LEFT JOIN user_group ug ON uum.group_id=ug.id");
        if ($result) {
            $jsonData = array();
            while ($array = mysql_fetch_row($result, MYSQL_ASSOC)) {
                $jsonData[] = $array;
            }
            foreach ($jsonData as $key => $value) {
                $row_array['id'] = $value['id'];
                $row_array['user_name'] = $value['user_name'];
                $row_array['group_name'] = $value['group_name'];
            }
            array_push($jsonData, $row_array);
            echo json_encode($jsonData);
        }

        else
            echo mysql_error();
        break;
    default:
        break;
}
?>
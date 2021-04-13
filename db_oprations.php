<?php

//include("connection.php");
$con = mysqli_connect("localhost", "root", "mZS*uKqRDCeJxO9", "basketdrop");
$action = $_POST['action'];

// get current date and time
date_default_timezone_set('Asia/Calcutta');
$creatred_at = date('d/m/Y h:i:s a', time());

switch ($action) {
    case 'loadbasket1':
        $result = mysqli_query($con,"select * from users");
        if ($result) {
            $jsonData = array();
            while ($array = mysqli_fetch_assoc($result)) {
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
           echo mysqli_errno($con)."\n";
        break;
    case 'loadbasket2':
        $result = mysqli_query($con,"select * from user_group");
        if ($result) {
            $jsonData = array();
            while ($array = mysqli_fetch_assoc($result)) {
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
            echo mysqli_errno($con) . "\n";
        break;
    case 'loadbasketContainer':
        $result = mysqli_query($con,"select * from users");
        if ($result) {
            $jsonData = array();
            while ($array = mysqli_fetch_assoc($result)) {
                $jsonData[] = $array;
            }
            foreach ($jsonData as $key => $value) {
                $row_array['id'] = $value['id'];
                $row_array['user_name'] = $value['user_name'];
                $row_array['price'] = $value['price'];
            }
            array_push($jsonData, $row_array);
            echo json_encode($jsonData);
        }

        else
            echo mysqli_errno($con) . "\n";
        break;
    case 'loadbasketContainer2':
        $group_id = $_POST['data'];
        $result = mysqli_query($con,"select * from usergroup_user_map uum 
                LEFT JOIN users u ON uum.user_id=u.id
                LEFT JOIN user_group ug ON uum.user_group=ug.id 
                where uum.user_group=$group_id");
        if ($result) {
            $jsonData = array();
            while ($array = mysqli_fetch_assoc($result)) {
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
            echo mysqli_errno($con) . "\n";
        break;
    default:
        break;
}
?>
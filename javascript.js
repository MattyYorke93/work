        function openStartTxn() {
            $("#divStartTxn").prop("hidden", false);
            $("#divCommitTxn").prop("hidden", true);
            $("#divStatus").prop("hidden", true);
            $("#divStopTxn").prop("hidden", true);
            $("#divReset").prop("hidden", true); 
        }

        function openCommitTxn() {
            $("#divStartTxn").prop("hidden", true);
            $("#divCommitTxn").prop("hidden", false);
            $("#divStatus").prop("hidden", true);
            $("#divStopTxn").prop("hidden", true);
            $("#divReset").prop("hidden", true); 
        }

        function openStatus() {
            $("#divStartTxn").prop("hidden", true);
            $("#divCommitTxn").prop("hidden", true);
            $("#divStatus").prop("hidden", false);
            $("#divStopTxn").prop("hidden", true);
            $("#divReset").prop("hidden", true); 
        }

        function openStopTxn() {
            $("#divStartTxn").prop("hidden", true);
            $("#divCommitTxn").prop("hidden", true);
            $("#divStatus").prop("hidden", true);
            $("#divStopTxn").prop("hidden", false);
            $("#divReset").prop("hidden", true);
        }

        function openReset() {
            $("#divStartTxn").prop("hidden", true);
            $("#divCommitTxn").prop("hidden", true);
            $("#divStatus").prop("hidden", true);
            $("#divStopTxn").prop("hidden", true);
            $("#divReset").prop("hidden", false);
        }

        $(document).ready(function () {

            $("#divStartTxn").prop("hidden", false);
            $("#divCommitTxn").prop("hidden", true);
            $("#divStatus").prop("hidden", true);
            $("#divStopTxn").prop("hidden", true);
            $("#divReset").prop("hidden", true);


            $("#btnConnect").click(function () {
                $.ajax({
                    url: "Home/ConnectToAlio",
                    method: "POST",
                    data: {
                        serialNumber: $("#serialNumber").val(), connectionId: $("#hiddenConnectionId").val()
                    },
                    success: function (response) {
                        if (response == "Alio serial number cannot be empty") {
                            $("#alioError").prop("hidden", false);
                            $("#alioError").text("***Alio serial number cannot be empty***");
                        }
                        else {
                            $("#alioError").prop("hidden", true);
                        }
                        //if (response == "Connected") {
                        //    $("#status").text("Connected");

                        //}
                        //else {
                        //    $("#status").text("Not Connected");
                        //}
                    },
                    error: function (response) {
                        console.log("ERROR: " + response.responseText);
                    }

                })
            });


            $("#btnStartTxn").click(function () {
                //$(this).addclass("fa fa-spinner fa-spin");
                $.ajax({
                    url: "Home/StartTransaction",
                    method: "POST",
                    data: {
                        serialNumber: $("#serialNumber").val(), PreAuthAmt: $("#preauthamt").val(), ConnectionFee: $("#connectionfee").val(), CostPerKwh: $("#costperkwh").val(), ConnectorId: $("#connectorId").val(),
                        connectionId: $("#hiddenConnectionId").val()
                    },
                    success: function (response) {
                        if (response == "Alio serial number cannot be empty"){
                            $("#alioError").prop("hidden", false);
                            $("#alioError").text("***Alio serial number cannot be empty***");
                        }
                        else{
                            $("#alioError").prop("hidden", true);
                        }
                        //if (response == "Connected") {
                        //    $("#status").text("Connected");
                        //}
                        //else {
                        //    $("#status").text("Not Connected");
                        //}
                    }

                })
            });

            $("#btnCommitSession").click(function () {
                $.ajax({
                    url: "Home/CommitSession",
                    method: "POST",
                    data: {
                        serialNumber: $("#serialNumber").val(), SessionId: $("#sessionId").val(), ConnectionFee: $("#connectionfee").val(), CostPerKwh: $("#costperkwh").val(), ConnectorId: $("#connectorId").val(),
                        startTime: $("#startTime").val(), commitAmount: $("#commitAmount").val(), preAuthAmt: $("#preauthamt").val(), connectionId: $("#hiddenConnectionId").val()
                    },
                    success: function (response) {
                        if (response == "Alio serial number cannot be empty"){
                            $("#alioError").prop("hidden", false);
                            $("#alioError").text("***Alio serial number cannot be empty***");
                        }
                        else{
                            $("#alioError").prop("hidden", true);
                        }
                        //if (response == "Connected") {
                        //    $("#status").text("Connected");
                        //}
                        //else {
                        //    $("#status").text("Not Connected");
                        //}
                    }

                })
            });

            $("#btnStopTxn").click(function () {
                if ($("#btnStopTxn").val() == "Stop Transaction") {
                    $.ajax({
                        url: "Home/StopTxn",
                        method: "POST",
                        data: {
                            serialNumber: $("#serialNumber").val(), connectorId: $("#connectorId").val(), connectionId: $("#hiddenConnectionId").val()
                        },
                        success: function (response) {

                        }
                    })
                }
                else if ($("#btnStopTxn").val() == "Cancel Transaction") {
                    $.ajax({
                        url: "Home/CancelTxn",
                        method: "POST",
                        data: {
                            serialNumber: $("#serialNumber").val(), sessionId: $("#sessionId").val(), connectionId: $("#hiddenConnectionId").val()
                        },
                        success: function (response) {
                            if (response == "Alio serial number cannot be empty") {
                                $("#alioError").prop("hidden", false);
                                $("#alioError").text("***Alio serial number cannot be empty***");
                            }
                            else {
                                $("#alioError").prop("hidden", true);
                            }
                        }
                    })
                }
            });


            $("#btnRequestStatus").click(function () {
                $.ajax({
                    url: "Home/RequestStatus",
                    method: "GET",
                    data: {
                        serialNumber: $("#serialNumber").val(), sessionId: $("#sessionId").val(), connectionId: $("#hiddenConnectionId").val()
                    },
                    success: function (response) {
                        if (response == "Alio serial number cannot be empty") {
                            $("#alioError").prop("hidden", false);
                            $("#alioError").text("***Alio serial number cannot be empty***");
                        }
                        else {
                            $("#alioError").prop("hidden", true);
                        }
                    }
                })
            });


            $("#btnReset").click(function () {
                $.ajax({
                    url: "Home/Reset",
                    method: "POST",
                    data: {
                        serialNumber: $("#serialNumber").val(), connectionId: $("#hiddenConnectionId").val()
                    },
                    success: function (response) {
                        if (response == "Alio serial number cannot be empty") {
                            $("#alioError").prop("hidden", false);
                            $("#alioError").text("***Alio serial number cannot be empty***");
                        }
                        else {
                            $("#alioError").prop("hidden", true);
                        }
                    }
                })
            })

        });

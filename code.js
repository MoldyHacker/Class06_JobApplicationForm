let today = new Date().toISOString().split('T')[0];

$('.date').append(today);

let dOB = $('#dateOfBirth').val().valueOf();

// let age = new Date(today - new Date(dOB)).getUTCFullYear() - 1970;

$('body').on('click', function () {
    if ($('#driversLicenseCheckbox').is(':checked') === true)
        $('#driversLicenseInfo').removeClass('visually-hidden')
    else
        $('#driversLicenseInfo').addClass('visually-hidden')

    if($('#canProvideEligibilityProofYes').is(':checked') === true)
        $('#isEligibleToWork').removeClass('visually-hidden')
    else
        $('#isEligibleToWork').addClass('visually-hidden')

    if($('#isConvictedOfAFelonyYes').is(':checked') === true)
        $('#convictedFelon').removeClass('visually-hidden')
    else
        $('#convictedFelon').addClass('visually-hidden')

    if($('#previousResortWork').is(':checked') === true)
        $('#resortsWork').removeClass('visually-hidden')
    else
        $('#resortsWork').addClass('visually-hidden')

    if($('#previousResortWorkDiffName').is(':checked') === true)
        $('#resortsWorkDiffName').removeClass('visually-hidden')
    else
        $('#resortsWorkDiffName').addClass('visually-hidden')

    if($('#relatedToNPSWorker').is(':checked') === true)
        $('#relatedNPSWorker').removeClass('visually-hidden')
    else
        $('#relatedNPSWorker').addClass('visually-hidden')

    if($('#rvIsGood').is(':checked') === true)
        $('#rvCheck').removeClass('visually-hidden')
    else
        $('#rvCheck').addClass('visually-hidden')



})


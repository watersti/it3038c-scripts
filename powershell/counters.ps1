$Machines = 'watersti-win'
Foreach ($machine in $Machines)
{
    $pt= (Get-Counter -Counter "\Processor(__Total)\% Procesor Time" -SampleInterval 1 -MaxSamples 3).CounterSamples.CookedValue 
    #Write-Host("There are {0} counters on {1}" -f $RCounters.count, ($machine))
        $Sample=1
        foreach($p in $pt){
            $date = Get-Date -Format g
            "{3} - Sample {2}: CPU is at {0}% on {1}" -f [int]$p, $machine, $Sample | out-file -append C:\Logs\output.txt
            $Sample++
    }
}
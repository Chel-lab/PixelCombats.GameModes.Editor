module.exports = {
    set_editor_options,
    set_editor_inventory,
    create_team_red,
    create_team_blue
};

// разрешаем все что можно для редактора
function set_editor_inventory() {
    var roomInventory = Inventory.GetContext();
    roomInventory.Main.Value = false;
    roomInventory.Secondary.Value = false;
    roomInventory.Melee.Value = true;
    roomInventory.Explosive.Value = false;
    roomInventory.Build.Value = true;
    roomInventory.BuildInfinity.Value = true;
}

function set_editor_options() {
    Build.GetContext().Pipette.Value = true;
    Build.GetContext().FloodFill.Value = true;
    Build.GetContext().FillQuad.Value = true;
    Build.GetContext().RemoveQuad.Value = true;
    Build.GetContext().BalkLenChange.Value = true;
    Build.GetContext().FlyEnable.Value = true;
    Build.GetContext().SetSkyEnable.Value = true;
    Build.GetContext().GenMapEnable.Value = true;
    Build.GetContext().ChangeCameraPointsEnable.Value = true;
    Build.GetContext().QuadChangeEnable.Value = true;
    Build.GetContext().BuildModeEnable.Value = true;
    Build.GetContext().CollapseChangeEnable.Value = true;
    Build.GetContext().RenameMapEnable.Value = true;
    Build.GetContext().ChangeMapAuthorsEnable.Value = true;
    Build.GetContext().LoadMapEnable.Value = true;
    Build.GetContext().ChangeSpawnsEnable.Value = true;
    Build.GetContext().BuildRangeEnable.Value = true;
}

function create_team_red() {
    Teams.Add("Red", "Teams/Red", { r: 1 });
    Teams.Get("Red").Spawns.SpawnPointsGroups.Add(2);
}

function create_team_blue() {
    Teams.Add("Blue", "Teams/Blue", { b: 1 });
    Teams.Get("Blue").Spawns.SpawnPointsGroups.Add(1);
}